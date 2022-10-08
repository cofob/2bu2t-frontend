<script lang="ts">
	import { joinClasses } from "$src/lib/utils";

	export let name;
	export const type = "text";
	export let required = false;
	export let placeholder: string;
	export let password = false;
	export let email = false;
	export let value = "";

	let styles: string[] = ["px-2 py-1 rounded-md mt-2 bg-neutral-600"];
	if ($$restProps.class) styles.push($$restProps.class);
</script>

<!-- Dirty hack to avoid svelte errors -->
{#if password}
	<input class={joinClasses(...styles)} id="input-{name}" type="password" {placeholder} {required} bind:value {name} />
{:else if email}
	<input class={joinClasses(...styles)} id="input-{name}" type="email" {placeholder} {required} bind:value {name} />
{:else}
	<input class={joinClasses(...styles)} id="input-{name}" type="text" {placeholder} {required} bind:value {name} />
{/if}
