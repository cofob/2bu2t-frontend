import { browser } from "$app/environment";
import JWT from "./jwt";

class RefreshToken {
	async request() {
		return "";
	}

	async get() {
		const token = localStorage.refreshtoken;
		const jwt = new JWT(token);
		if (jwt.expired()) {
			delete localStorage.refreshtoken;
			delete localStorage.uuid;
			throw Error("Refresh token expired");
		}
		return token;
	}
}

export default class Api {
	fetch: any;

	constructor(fetch) {
		this.fetch = browser ? fetch.bind(window) : fetch;
	}

	async request_token() {
		const data = await (
			await this.fetch(import.meta.env.VITE_API_ENDPOINT + "/authorization/login/get_access_token", {
				body: {
					refresh_token: await new RefreshToken().get(),
				},
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			})
		).json();
		sessionStorage.token = data.access_token;
	}

	async api(path: string, body = {}, opts = {}) {
		path = import.meta.env.VITE_API_ENDPOINT + path;
		body = JSON.stringify(body);
		const method = opts.method || "GET";
		const headers = {
			"Content-Type": "application/json",
		};

		if (browser) {
			let token = opts.token || sessionStorage.getItem("token");
			if (!token) await this.request_token();
			token = opts.token || sessionStorage.getItem("token");
			const jwt = new JWT(token);
			if (jwt.expired()) await this.request_token();
			token = opts.token || sessionStorage.getItem("token");
			headers.Authorization = token ? "Bearer " + token : "";
		}

		try {
			const res = await this.fetch(path, {
				body: method === "GET" ? null : body,
				method,
				headers,
			});

			if (res.ok) {
				return await (opts.raw ? res.text() : res.json());
			}

			const err = await res.json();

			if (err.error_code == "Unauthorized") {
				await this.request_token();
			}

			throw new Error(err.detail);
		} catch (err) {
			throw new Error(err);
		}
	}
}
