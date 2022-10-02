<script lang="ts">
	import { Main } from "$lib/components";
</script>

<Main center class="bg-gradient-to-tl from-green-900 to-green-800">
	<form class="shadow-xl bg-opacity-70 bg-neutral-700 p-2 rounded-lg" on:submit|preventDefault>
		<slot />
	</form>
</Main>
