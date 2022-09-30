// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

declare namespace App {
	interface ImportMetaEnv {
		VITE_API_ENDPOINT: string;
		VITE_IPFS_ENDPOINT: string;
		VITE_DEPLOY_TARGET: string;
		VITE_ANALYTICS: string;
	}

	interface ImportMeta {
		readonly env: ImportMetaEnv;
	}
}
