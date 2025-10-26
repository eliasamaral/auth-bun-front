import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'

import { signIn } from '@/lib/auth'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
} from '@/components/ui/card'
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

const formSignInSchema = z.object({
	email: z.email('Digite um email válido'),
	password: z.string().min(3, 'Digite no mínimo 3 caracteres.'),
})

type SignInSchema = z.infer<typeof formSignInSchema>

export function SignIn() {
	const { handleSubmit, control } = useForm<SignInSchema>({
		resolver: zodResolver(formSignInSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	async function handleSignIn({
		email,
		password,
	}: z.infer<typeof formSignInSchema>) {
		await signIn.email(
			{
				email,
				password,
				callbackURL: 'http://localhost:5173',
			},
			{
				onError(context) {
					if (context.error.message) {
						alert(context.error.message)
					} else {
						alert('Falhou')
					}
				},
			},
		)
	}

	return (
		<Card className="w-full h-[400px] sm:max-w-md">
			<CardContent>
				<form id="sign-in-form" onSubmit={handleSubmit(handleSignIn)}>
					<FieldGroup>
						<Controller
							name="email"
							control={control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="signin-email">Email</FieldLabel>
									<Input
										{...field}
										id="signin-email"
										aria-invalid={fieldState.invalid}
										placeholder="Digite seu email"
										autoComplete="off"
									/>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>
						<Controller
							name="password"
							control={control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="signin-password">Senha</FieldLabel>
									<Input
										{...field}
										id="signin-password"
										type="password"
										aria-invalid={fieldState.invalid}
										placeholder="Digite sua senha"
										autoComplete="off"
									/>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>
					</FieldGroup>
				</form>
			</CardContent>
			<CardFooter>
				<Field orientation="horizontal">
					<Button type="submit" form="sign-in-form">
						Entrar
					</Button>
				</Field>
			</CardFooter>
		</Card>
	)
}
