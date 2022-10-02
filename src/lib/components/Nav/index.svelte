<script lang="ts">
	import Chat from "svelte-heros/Chat.svelte";
	import BookOpen from "svelte-heros/BookOpen.svelte";
	import Download from "svelte-heros/Download.svelte";
	import Login from "svelte-heros/Login.svelte";
	import { ipfs } from "../../utils";
	import HamburgerItem from "./HamburgerItem.svelte";
	import Links from "./Links.svelte";
	import Link from "./Link.svelte";

	export let backdrop = true;
</script>

<nav
	class="fixed w-screen py-3 {backdrop
		? 'border-b-2 backdrop-blur-md bg-opacity-50 bg-neutral-900 border-opacity-40 border-neutral-700'
		: ''}"
>
	<div
		class="flex items-center justify-between 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm md:px-0 px-3 mx-auto"
	>
		<div class="flex items-center gap-x-3">
			<div class="flex items-center sm:border-r-2 border-neutral-400 pr-3 gap-x-1">
				<img
					src={ipfs("/QmUKSkxNPo45auwJhn8zz6zyS4cxtTS9PM4fX5haqmNxJc/logo.webp")}
					alt="logo"
					width="24"
					height="24"
				/>
				<a href="/" class="font-bold text-lg">firesquare</a>
			</div>
			<Links>
				<Link href={import.meta.env.VITE_WIKI} blank><BookOpen size="16" /> Вики</Link>
				<Link href={import.meta.env.VITE_DISCORD} blank><Chat size="16" /> Discord</Link>
			</Links>
		</div>
		<Links>
			<Link href="/auth/login"><Login size="16" /> Войти</Link>
			<Link href="/download">
				{#if backdrop}
					<button href="/download" class="bg-blue-600 rounded-md flex items-center gap-x-2 pr-2 shadow-md">
						<span class="bg-blue-700 py-1 px-2 rounded-l-md">
							<Download size="18" />
						</span> Скачать
					</button>
				{/if}
			</Link>
		</Links>
		<div
			class="flex flex-col gap-y-1 sm:hidden rounded-md p-2 hover:cursor-pointer {!backdrop
				? 'bg-opacity-60 bg-neutral-900'
				: ''}"
		>
			<HamburgerItem />
			<HamburgerItem />
			<HamburgerItem />
		</div>
	</div>
</nav>
