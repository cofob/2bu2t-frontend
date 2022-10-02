<script lang="ts">
	export let href: string;
	export let blank = false;
	export let nav = false;
	export let hover = false;

	let styles = "";
	if (hover) styles += " hover:underline";
	if (nav) styles += " flex items-center gap-x-1 motion-safe:transition-colors motion-safe:duration-100";
</script>

<a {href} target={blank ? "_blank" : ""} class="{$$restProps.class ? $$restProps.class : ''} {styles}">
	<slot />
</a>
