<script lang="ts">
	import { addClass } from "$src/lib/utils";

	export let level: 1 | 2 | 3 | 4 | 5 | 6;

	const by_level = {
		1: "font-black text-4xl sm:text-5xl md:text-7xl",
		2: "font-black text-3xl sm:text-4xl md:text-6xl",
		3: "font-bold text-2xl sm:text-3xl md:text-5xl",
		4: "font-bold text-xl sm:text-2xl md:text-4xl",
		5: "font-semibold text-lg sm:text-xl md:text-3xl",
		6: "font-semibold text-md sm:text-lg md:text-2xl",
	};

	const element = `h${level}`;
</script>

<svelte:element this={element} class={addClass($$restProps, by_level[level])}>
	<slot />
</svelte:element>
