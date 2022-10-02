<script lang="ts">
	import { ipfs } from "../utils";
</script>

<nav>
	<div class="logo">
		<img src={ipfs("/QmUKSkxNPo45auwJhn8zz6zyS4cxtTS9PM4fX5haqmNxJc/logo.webp")} alt="logo" width="24" height="24" />
		<a href="/">firesquare</a>
	</div>
	<p class="text-center">© firesquare team 2022</p>
	<p class="text-center"><a href="https://git.frsqr.xyz/firesquare/front">contact@firesquare.ru</a></p>
</nav>

<style lang="postcss">
	nav {
		width: 100%;
		border-top-width: 1px;
		@apply bg-opacity-50 bg-neutral-900 border-opacity-80 border-neutral-700 py-2;
	}

	nav > div {
		display: flex;
		justify-content: center;
		align-items: center;
		@apply 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm md:px-0 px-2 mx-auto;
	}

	.logo {
		display: flex;
		align-items: center;
		@apply pr-3 gap-x-1;
	}

	.logo > a {
		@apply font-bold text-lg;
	}
</style>
