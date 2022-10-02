<script lang="ts">
	export let center = false;

	let styles = "";
	if (center) styles += " min-h-screen px-2 sm:px-0 flex items-center justify-center";
</script>

<section class="{styles} {$$restProps.class ? $$restProps.class : ''}"><slot /></section>
