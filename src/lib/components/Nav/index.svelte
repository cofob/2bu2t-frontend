<script lang="ts">
	import X from "svelte-heros/X.svelte";
	import { ipfs, joinClasses } from "../../utils";
	import HamburgerItem from "./HamburgerItem.svelte";
	import Links from "./Links.svelte";
	import LeftLinks from "./LeftLinks.svelte";
	import RightLinks from "./RightLinks.svelte";

	export let backdrop = true;

	let hidden = true;
	const backdrop_initial = backdrop;
</script>

<nav
	class={joinClasses(
		"fixed w-screen py-3 motion-safe:transition-all",
		backdrop ? "border-b backdrop-blur-md bg-opacity-50 bg-neutral-900 border-opacity-80 border-neutral-700" : [],
	)}
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
				<LeftLinks />
			</Links>
		</div>
		<Links>
			<RightLinks />
		</Links>
		<div
			class={joinClasses(
				"flex flex-col items-center gap-y-1 sm:hidden rounded-md p-2 hover:cursor-pointer motion-safe:transition-all",
				!hidden ? "rotate-90" : [],
			)}
			on:click={() => {
				hidden = !hidden;
				if (!backdrop_initial) {
					backdrop = !backdrop;
				}
			}}
		>
			<HamburgerItem />
			<HamburgerItem />
			<HamburgerItem />
		</div>
	</div>
	<div class="flex flex-col items-end sm:hidden px-4" class:hidden>
		<LeftLinks />
		<RightLinks />
	</div>
</nav>
