import { timestamp } from "../utils";
import Api from "./base";
import JWT from "./jwt";

interface Token {
	request(): Promise<string>;
	get(): Promise<string>;
}

class UUIDToken extends Api implements Token {
	async request() {
		const token = await this.api("/authorization/signup/reserve_uuid");
		sessionStorage.uuidtoken = token;
		return token;
	}

	async get() {
		if (!sessionStorage.getItem("uuidtoken")) return this.request();
		const token = sessionStorage.uuidtoken;
		const jwt = new JWT(token);
		if (jwt.data.exp <= timestamp()) return this.request();
		return token;
	}
}

export default class Auth extends Api {
	async sha256(message) {
		const msgBuffer = new TextEncoder().encode(message);
		const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
		const hashArray = Array.from(new Uint8Array(hashBuffer));
		const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
		return hashHex;
	}

	async get_password_hash(password: string, salt: string) {
		// TODO: use PBKDF2-SHA256
		return this.sha256(this.sha256(password) + salt);
	}

	async register(email: string, nickname: string, plain_password: string): Promise<string> {
		const uuid_token = await this.reserve_uuid();
		const password = await this.get_password_hash(plain_password, uuid_token);
		const res = await this.api(
			"/authorization/signup/",
			{
				user: {
					email,
					nickname,
					password,
				},
				uuid_token,
			},
			{ method: "POST" },
		);
		localStorage.refreshtoken = res.pair.refresh_token;
		localStorage.uuid = res.uuid;
		sessionStorage.token = res.pair.access_token;
		return res;
	}

	async get_uuid(nickname: string) {
		return await this.api(`/authorization/login/get_uuid?nickname=${nickname}`);
	}

	async reserve_uuid() {
		const token = new UUIDToken(this.fetch);
		return await token.get();
	}
}
