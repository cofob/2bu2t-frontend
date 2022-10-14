<script lang="ts">
	import "$lib/app.css";
	import { Footer } from "$lib/components";
	import NProgress from "nprogress";
	import { navigating } from "$app/stores";

	import * as Sentry from "@sentry/svelte";
	import { BrowserTracing } from "@sentry/tracing";

	Sentry.init({
		dsn: "https://f390224b418344c9b14a76667f275130@o4503981424705536.ingest.sentry.io/4503981429030912",
		integrations: [new BrowserTracing()],
		tracesSampleRate: 1.0,
	});

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

<slot />

<Footer />

<!-- TODO: add method to completely disable analytics -->
{@html import.meta.env.VITE_ANALYTICS}
