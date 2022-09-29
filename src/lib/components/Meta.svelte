<script lang="ts">
	import { ipfs } from "$lib/utils";

	export let title: string;
	export let description: string | null;
	export let cover: string | null = ipfs("QmSnwhp78vrJo57jPshuwPQqc2s6U8CUqq51AazvSECWdF/default_cover.webp");
	export let noindex = false;

	title = title + " — Firesquare";
</script>

<svelte:head>
	<title>{title}</title>

	<meta content={title} name="title" />
	<meta content={title} property="og:title" />
	<meta content={title} property="twitter:title" />

	{#if description != null}
		<meta content={description} name="description" />
		<meta content={description} property="og:description" />
		<meta content={description} property="twitter:description" />
	{/if}

	{#if cover != null}
		<meta content="website" property="og:type" />
		<meta content="summary_large_image" property="twitter:card" />
		<meta content={cover} property="og:image" />
		<meta content={cover} property="twitter:image" />
	{/if}

	{#if noindex}
		<meta name="robots" content="noindex" />
	{:else}
		<meta content="index, follow" name="robots" />
	{/if}
</svelte:head>
