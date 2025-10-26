import { SignIn } from '@/components/sign-in'
import { SignUp } from '@/components/sing-up'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function Auth() {
	return (
		<div className="flex flex-row justify-center align-center h-screen">
			<div className="flex flex-col justify-center align-center w-full bg-gray-500">dsdsdsd</div>
			<div className="flex flex-col justify-center align-center w-full bg-yellow-500">
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
