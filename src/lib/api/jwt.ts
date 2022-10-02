import { timestamp } from "$lib/utils";

export default class JWT {
	token: string;
	data: any;

	constructor(token: string) {
		this.token = token;
		const data_part = token.split(".", 2)[1];
		this.data = JSON.parse(atob(data_part));
	}

	expired() {
		return this.data.exp <= timestamp();
	}
}
