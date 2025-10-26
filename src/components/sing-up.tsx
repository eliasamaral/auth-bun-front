import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'

import { signUp } from '@/lib/auth'

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

const formSignUpSchema = z.object({
	email: z.email('Digite um email válido'),
	name: z
		.string('Digite um nome válido')
		.min(5, 'Digite no mínimo 5 caracteres.'),
	password: z.string().min(3, 'Digite no mínimo 3 caracteres.'),
})

type SignUpSchema = z.infer<typeof formSignUpSchema>

export function SignUp() {
	const { handleSubmit, control } = useForm<SignUpSchema>({
		resolver: zodResolver(formSignUpSchema),
		defaultValues: {
			email: '',
			name: '',
			password: '',
		},
	})

	async function handleSignUp({
		email,
		password,
		name,
	}: z.infer<typeof formSignUpSchema>) {
		await signUp.email(
			{
				email,
				password,
				name,
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
		<Card className="w-full sm:max-w-md">
			<CardContent>
				<form id="sign-up-form" onSubmit={handleSubmit(handleSignUp)}>
					<FieldGroup>
						<Controller
							name="name"
							control={control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="signup-name">Nome</FieldLabel>
									<Input
										{...field}
										id="signup-name"
										aria-invalid={fieldState.invalid}
										placeholder="Digite um nome"
										autoComplete="off"
									/>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>
						<Controller
							name="email"
							control={control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="signup-email">Email</FieldLabel>
									<Input
										{...field}
										id="signup-email"
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
									<FieldLabel htmlFor="signup-password">Senha</FieldLabel>
									<Input
										{...field}
										id="signup-password"
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
					<Button type="submit" form="sign-up-form">
						Cadastrar
					</Button>
				</Field>
			</CardFooter>
		</Card>
	)
}
