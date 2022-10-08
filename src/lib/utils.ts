export function ipfs(cid: string): string {
	return import.meta.env.VITE_IPFS_ENDPOINT + "/ipfs" + cid;
}

export function ipns(cid: string): string {
	return import.meta.env.VITE_IPFS_ENDPOINT + "/ipns" + cid;
}

export function timestamp() {
	return Math.floor(Date.now() / 1000);
}

export function joinClasses(...args: any[]): string {
	return args.flat().join(" ");
}

export function addClass(restprops: SvelteRestProps, styles: string): string {
	if (restprops.class) return restprops.class + " " + styles;
	return styles;
}
