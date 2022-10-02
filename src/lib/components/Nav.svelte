<script lang="ts">
	import Chat from "svelte-heros/Chat.svelte";
	import BookOpen from "svelte-heros/BookOpen.svelte";
	import Download from "svelte-heros/Download.svelte";
	import Login from "svelte-heros/Login.svelte";
	import { ipfs } from "../utils";

	export let backdrop = true;
</script>

<nav class:backdrop>
	<div>
		<div class="brand">
			<div class="logo">
				<img
					src={ipfs("/QmUKSkxNPo45auwJhn8zz6zyS4cxtTS9PM4fX5haqmNxJc/logo.webp")}
					alt="logo"
					width="24"
					height="24"
				/>
				<a href="/">firesquare</a>
			</div>
			<div class="links">
				<a href={import.meta.env.VITE_WIKI} target="_blank"><BookOpen size="16" /> Вики</a>
				<a href={import.meta.env.VITE_DISCORD} target="_blank"><Chat size="16" /> Discord</a>
			</div>
		</div>
		<div class="links">
			<a href="/auth/login"><Login size="16" /> Войти</a>
			<a href="/download"><button href="/download"><span><Download size="18" /></span> Скачать</button></a>
		</div>
		<div class="hamburger">
			<span />
			<span />
			<span />
		</div>
	</div>
</nav>

<style lang="postcss">
	nav {
		top: 0px;
		position: sticky;
		width: 100%;
		@apply py-2;
	}

	.backdrop {
		backdrop-filter: saturate(100%) blur(18px);
		border-bottom-width: 1px;
		@apply bg-opacity-50 bg-neutral-900 border-opacity-80 border-neutral-700;
	}

	nav > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		@apply 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm md:px-0 px-2 mx-auto;
	}

	.hamburger {
		@apply flex flex-col gap-y-1 sm:hidden bg-neutral-900 border-2 border-neutral-700 rounded-md p-2 hover:cursor-pointer;
	}

	.hamburger > span {
		@apply w-4 h-px bg-neutral-400;
	}

	.brand {
		display: flex;
		align-items: center;
		@apply gap-x-3;
	}

	.brand > p {
		@apply font-light text-sm;
	}

	.logo {
		display: flex;
		align-items: center;
		@apply sm:border-r-2 border-neutral-400 pr-3 gap-x-1;
	}

	.logo > a {
		@apply font-bold text-lg;
	}

	.links {
		@apply gap-x-3 hidden sm:flex;
	}

	.links > a {
		display: flex;
		align-items: center;
		@apply gap-x-1 motion-safe:transition-colors motion-safe:duration-100;
	}

	button {
		@apply bg-blue-600 rounded-md flex items-center gap-x-2 pr-2 shadow-md;
	}

	button > span {
		@apply bg-blue-700 py-2 px-2 rounded-l-md;
	}
</style>
