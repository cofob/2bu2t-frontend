<script lang="ts">
	export let name;
	export const type = "text";
	export let required = false;
	export let placeholder: string;
	export let password = false;
	export let email = false;
	export let value = "";
</script>

<!-- Dirty hack to avoid svelte errors -->
{#if password}
	<input
		class="px-2 py-1 rounded-md mt-2 bg-neutral-600 {$$restProps.class ? $$restProps.class : ''}"
		id="input-{name}"
		type="password"
		{placeholder}
		{required}
		bind:value
		{name}
	/>
{:else if email}
	<input
		class="px-2 py-1 rounded-md mt-2 bg-neutral-600 {$$restProps.class ? $$restProps.class : ''}"
		id="input-{name}"
		type="email"
		{placeholder}
		{required}
		bind:value
		{name}
	/>
{:else}
	<input
		class="px-2 py-1 rounded-md mt-2 bg-neutral-600 {$$restProps.class ? $$restProps.class : ''}"
		id="input-{name}"
		type="text"
		{placeholder}
		{required}
		bind:value
		{name}
	/>
{/if}
