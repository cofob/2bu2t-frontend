<script lang="ts">
	export let color = "neutral";
	export let type = "button";
	export let onclick;

	let styles: string;
	if (color == "neutral") styles = "bg-neutral-600 hover:bg-neutral-500";
</script>

<button
	class="{styles} px-2 py-1 rounded-md mt-2 font-semibold motion-safe:transition-all active:scale-95 {$$restProps.class
		? $$restProps.class
		: ''}"
	on:click={onclick}
	{type}
>
	<slot />
</button>
