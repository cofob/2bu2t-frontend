export function ipfs(cid: string): string {
	return import.meta.env.VITE_IPFS_ENDPOINT + "ipfs/" + cid;
}

export function timestamp() {
	return Math.floor(Date.now() / 1000);
}
