<script lang="ts">
	import { page } from "$app/stores";
	import { Meta } from "$lib/components";
</script>

<Meta title="Ошибка" />

<section>
	<div>
		{#if $page.status == 404}
			<h1 class="heading">Ошибка 404</h1>
		{:else}
			<h1 class="heading">{$page.status}</h1>
		{/if}
		{#if $page.error?.message !== undefined}
			<p class="pt-1 text-xl">{$page.error?.message}</p>
		{/if}
		<a href="/" class="p-2 py-3 rounded-lg text-xl font-bold">На главную</a>
	</div>
</section>

<style lang="postcss">
	section {
		@apply flex flex-col justify-center min-h-screen bg-gradient-to-tl from-red-900 to-red-800 text-center;
	}

	.heading {
		@apply font-black text-4xl sm:text-5xl md:text-7xl pt-4;
	}
</style>
