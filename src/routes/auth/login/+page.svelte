<script>
	import { Button, Input, Link } from "$lib/components";
</script>

<h1 class="text-2xl text-center font-semibold text-neutral-50">Вход</h1>

<div class="flex flex-col">
	<Input name="nickname" placeholder="Ник" />
	<Input password name="password" placeholder="Пароль" />
	<Button onclick={() => {}} type="submit">Войти</Button>
	<div class="text-center mt-2">
		<p><Link href="/auth/login/signup" hover>Зарегистрироваться.</Link></p>
		<p><Link href="/auth/restore/password" hover>Восстановить пароль.</Link></p>
	</div>
</div>
