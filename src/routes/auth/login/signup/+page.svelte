<script>
	import { Button, Input, Link } from "$lib/components";
	import { Auth } from "$lib/api";

	let email, nickname, password;

	let auth = new Auth(fetch);
</script>

<h1 class="text-2xl text-center font-semibold text-neutral-50">Регистрация</h1>

<div class="flex flex-col">
	<Input email name="email" placeholder="Почта" bind:value={email} />
	<Input name="nickname" placeholder="Ник" bind:value={nickname} />
	<Input password name="password" placeholder="Пароль" bind:value={password} />
	<Button
		onclick={async () => {
			let answer = await auth.register(email, nickname, password);
			console.log(answer);
		}}
		type="submit">Продолжить</Button
	>
	<div class="text-center mt-2">
		<p><Link href="/auth/login" hover>Уже есть аккаунт? Войти.</Link></p>
	</div>
</div>
