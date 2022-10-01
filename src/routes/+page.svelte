<script lang="ts">
	import { Auth } from "$lib/api";

	let auth = new Auth(fetch);
	let nickname, email, password;

	async function submit() {
		console.log(auth.register(email, nickname, password));
	}
</script>

<h1>Hello world!</h1>

<input bind:value={nickname} type="text" />
<input bind:value={email} type="email" />
<input bind:value={password} type="password" />
<button on:click={submit}>Submit</button>

<style lang="postcss">
	h1 {
		@apply text-lg;
	}
</style>
