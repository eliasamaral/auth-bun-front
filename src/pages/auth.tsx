import { SignIn } from '@/components/sign-in'
import { SignUp } from '@/components/sing-up'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function Auth() {
	return (
		<div className="min-h-screen grid lg:grid-cols-2">
			<div className="flex items-center justify-center p-8"></div>
			<div className="flex items-center justify-center p-8">
				<Tabs defaultValue="singIn" className="w-[400px]">
					<TabsList>
						<TabsTrigger value="singIn">Entrar</TabsTrigger>
						<TabsTrigger value="signUp">Cadastro</TabsTrigger>
					</TabsList>
					<TabsContent value="singIn">
						<SignIn />
					</TabsContent>
					<TabsContent value="signUp">
						<SignUp />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	)
}
