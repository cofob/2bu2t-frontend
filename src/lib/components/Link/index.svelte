<script lang="ts">
	import { joinClasses } from "$src/lib/utils";

	export let href: string;
	export let blank = false;
	export let nav = false;
	export let hover = false;

	let styles: string[] = [];
	if (hover) styles.push("hover:underline");
	if (nav)
		styles.push(
			"flex items-center gap-x-1 motion-safe:transition-colors motion-safe:duration-100 w-full sm:w-auto px-2 sm:px-0 py-1 sm:py-0 mt-1 sm:mt-0 rounded-md text-lg font-semibold sm:font-normal sm:text-sm",
		);
	if ($$restProps.class) styles.push($$restProps.class);
</script>

<a {href} target={blank ? "_blank" : ""} class={joinClasses(...styles)}>
	<slot />
</a>
