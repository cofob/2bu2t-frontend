export function ipfs(cid: string): string {
	return import.meta.env.VITE_IPFS_ENDPOINT + "ipfs/" + cid;
}
