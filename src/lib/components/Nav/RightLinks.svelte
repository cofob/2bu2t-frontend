<script lang="ts">
	import Download from "svelte-heros/Download.svelte";
	import Login from "svelte-heros/Login.svelte";
	import { Link } from "$lib/components";
</script>

<Link href="/auth/login" nav><Login size="16" /> Войти</Link>
<Link href="/download" nav>
	<button href="/download" class="bg-blue-600 rounded-md flex items-center gap-x-2 pr-2 shadow-md">
		<span class="bg-blue-700 py-1 px-2 rounded-l-md">
			<Download size="18" />
		</span> Скачать
	</button>
</Link>
