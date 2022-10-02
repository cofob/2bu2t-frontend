<script lang="ts">
	export let center = false;

	let styles = "";
	if (center) styles += " min-h-screen py-2 sm:py-0 flex items-center justify-center";
</script>

<main class="{styles} {$$restProps.class ? $$restProps.class : ''}"><slot /></main>
