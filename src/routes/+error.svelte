<script lang="ts">
	import { page } from "$app/stores";
	import { Meta, Nav } from "$lib/components";
	import Icon from "svelte-heros/ArrowLeft.svelte";
</script>

<Meta title="Ошибка" />

<Nav backdrop={false} />

<main class="min-h-screen">
	<section class="flex flex-col justify-center min-h-screen bg-gradient-to-tl from-red-900 to-red-800 text-center">
		<div>
			<h1 class="font-black text-4xl sm:text-5xl md:text-7xl pt-4">
				{#if $page.status == 404}
					Ошибка 404
				{:else}
					Ошибка {$page.status}
				{/if}
			</h1>
			{#if $page.error?.message !== undefined}
				<p class="pt-1 text-xl">
					{#if $page.status == 404}
						Страница не найдена
					{:else}
						{$page.error?.message}
					{/if}
				</p>
			{/if}
			<a href="/" class="p-2 py-3 rounded-lg text-xl font-bold flex gap-x-2 items-center max-w-fit mx-auto">
				<Icon size="18" /> На главную?
			</a>
		</div>
	</section>
</main>
