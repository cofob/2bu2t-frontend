<script lang="ts">
	export let href: string;
	export let blank = false;
	export let nav = false;
	export let hover = false;

	let styles = "";
	if (hover) styles += " hover:underline";
	if (nav)
		styles +=
			" flex items-center gap-x-1 motion-safe:transition-colors motion-safe:duration-100 w-full sm:w-auto hover:bg-neutral-900 hover:bg-opacity-50 sm:hover:bg-none px-2 sm:px-0 py-1 sm:py-0 mt-1 sm:mt-0 rounded-md text-lg font-semibold sm:font-normal sm:text-sm";
</script>

<a {href} target={blank ? "_blank" : ""} class="{$$restProps.class ? $$restProps.class : ''} {styles}">
	<slot />
</a>
