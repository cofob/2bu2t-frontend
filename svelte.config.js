import node_adapter from "@sveltejs/adapter-node";
import static_adapter from "@sveltejs/adapter-static";

import preprocess from "svelte-preprocess";

let adapter;
switch (process.env.VITE_DEPLOY_TARGET) {
	case "static":
		adapter = static_adapter({ fallback: "200.html" });
		break;
	case "node":
		adapter = node_adapter({ precompress: true });
		break;
	default:
		adapter = static_adapter({ fallback: "200.html" });
}

const get_css_hash = ({ css, hash }) => {
	return `${hash(css)}`;
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],

	compilerOptions: {
		cssHash: get_css_hash,
	},

	kit: {
		adapter,

		alias: {
			$src: "src",
			$components: "src/lib/components",
		},

		trailingSlash: "always",
	},
};

export default config;
