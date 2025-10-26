import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Auth } from '@/pages/auth'

export const App = () => {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>
			<div>
				<Auth />
			</div>
		</QueryClientProvider>
	)
}
