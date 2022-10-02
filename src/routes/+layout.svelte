<script lang="ts">
	import "$lib/app.css";
	import { Footer } from "$lib/components";
	import NProgress from "nprogress";
	import { navigating } from "$app/stores";

	NProgress.configure({
		showSpinner: false,
	});

	$: {
		if ($navigating) {
			setTimeout(() => {
				if ($navigating) {
					NProgress.start();
				}
			}, 100);
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
</script>

<svelte:head>
	<link rel="preconnect" href={import.meta.env.VITE_API_ENDPOINT} />
	<link rel="preconnect" href={import.meta.env.VITE_IPFS_ENDPOINT} />
</svelte:head>

<main class="min-h-screen">
	<slot />
</main>

<Footer />

<!-- TODO: add method to completely disable analytics -->
{@html import.meta.env.VITE_ANALYTICS}
