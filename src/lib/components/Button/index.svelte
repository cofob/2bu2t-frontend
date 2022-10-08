<script lang="ts">
	import { addClass, joinClasses } from "$src/lib/utils";

	export let color = "neutral";
	export let type = "button";
	export let onclick;

	let styles: string[] = [];
	if (color == "neutral") styles.push("bg-neutral-600 hover:bg-neutral-500");
</script>

<button
	class={addClass(
		$$restProps,
		joinClasses(styles, "px-2 py-1 rounded-md mt-2 font-semibold motion-safe:transition-all active:scale-95"),
	)}
	on:click={onclick}
	{type}
>
	<slot />
</button>
