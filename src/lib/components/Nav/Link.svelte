<script lang="ts">
	export let href: string;
	export let blank = false;
</script>

<a
	{href}
	target={blank ? "_blank" : ""}
	class="flex items-center gap-x-1 motion-safe:transition-colors motion-safe:duration-100"
>
	<slot />
</a>
