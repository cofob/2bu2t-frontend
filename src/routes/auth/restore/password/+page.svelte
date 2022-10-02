<script>
	import { Button, Input, Link, Main } from "$lib/components";
</script>

<h1 class="text-2xl text-center font-semibold text-neutral-50">Восстановление</h1>
<div class="flex flex-col">
	<Input email name="email" placeholder="Почта" required />
	<Button onclick={() => {}} type="submit">Отправить письмо</Button>
	<div class="text-center mt-2">
		<p><Link href="/auth/login" hover>Вспомнили логин? Войти.</Link></p>
	</div>
</div>
