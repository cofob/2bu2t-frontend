<script lang="ts">
	import Chat from "svelte-heros/Chat.svelte";
	import BookOpen from "svelte-heros/BookOpen.svelte";
	import { Link } from "$lib/components";
</script>

<Link href={import.meta.env.VITE_WIKI} blank nav><BookOpen size="16" /> Вики</Link>
<Link href={import.meta.env.VITE_DISCORD} blank nav><Chat size="16" /> Discord</Link>
