import { browser } from "$app/environment";

export default class Api {
	fetch: any;

	constructor(fetch) {
		this.fetch = browser ? fetch.bind(window) : fetch;
	}

	async api(
		path: string,
		body = {},
		opts = {
			method: "GET",
			raw: false,
		},
	) {
		path = import.meta.env.VITE_API_ENDPOINT + path;
		body = JSON.stringify(body);
		const method = opts.method || "GET";
		const headers = {};

		if (browser) {
			const token = localStorage.getItem("token");
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

			throw new Error(err.detail);
		} catch (err) {
			throw new Error(err);
		}
	}
}
