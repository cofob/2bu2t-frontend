<script lang="ts">
	import { addClass, joinClasses } from "$src/lib/utils";

	export let center = false;

	let styles = [];
	if (center) styles.push("min-h-screen px-2 sm:px-0 flex items-center justify-center");
</script>

<section class={addClass($$restProps, joinClasses(...styles))}><slot /></section>
