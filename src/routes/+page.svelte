<script lang="ts">
	import { Heading, Meta, Nav, Section } from "$lib/components";
	import { ipfs } from "$lib/utils";
</script>

<Meta title="Главная" />

<Nav />

<main>
	<Section center class="bg-gradient-to-tl from-neutral-900 to-neutral-800 text-center">
		<div>
			<Heading level={1}>Лучший сервер</Heading>
			<p class="pt-8 pb-10 text-xl">По мнению всего блять человечества.</p>
			<a href="/" class="p-2 py-3 bg-blue-600 rounded-lg text-xl font-bold">Что-то сделать</a>
		</div>
	</Section>
	<Section class="bg-gradient-to-bl from-red-900 to-red-800 py-8">
		<div class="max-w-screen-lg px-2 mx-auto flex flex-col md:flex-row justify-between gap-x-8">
			<div class="pt-4">
				<Heading level={2}>Каммунити</Heading>
				<p class="pt-4 pb-10 text-xl">Просто зашибенское!</p>
			</div>
			<div>
				<img
					class="rounded-lg"
					src={ipfs("/QmSnwhp78vrJo57jPshuwPQqc2s6U8CUqq51AazvSECWdF/default_cover.webp")}
					alt="img"
				/>
			</div>
		</div>
	</Section>
	<Section class="bg-gradient-to-bl from-blue-900 to-blue-800 py-8">
		<div class="max-w-screen-lg px-2 mx-auto flex flex-col md:flex-row justify-between gap-x-8">
			<div>
				<img
					class="rounded-lg"
					src={ipfs("/QmSnwhp78vrJo57jPshuwPQqc2s6U8CUqq51AazvSECWdF/default_cover.webp")}
					alt="img"
				/>
			</div>
			<div class="pt-4">
				<Heading level={2}>Что-то ещё</Heading>
				<p class="pt-4 pb-10 text-xl">Выглядит как говно... TODO: переделать зис шитти крап.</p>
			</div>
		</div>
	</Section>
</main>
