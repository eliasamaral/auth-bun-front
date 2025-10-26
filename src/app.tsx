import { SignIn } from '@/components/sign-in'
import { SignUp } from '@/components/sing-up'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { Me } from './components/me'

export const App = () => {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>
			<div>
				<SignIn />
				<SignUp />
				<Me/>
			</div>
		</QueryClientProvider>
	)
}
