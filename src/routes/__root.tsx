import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
	component: RootComponent,
})

function RootComponent() {
	return (
		<>
			<div>
				<Link to="/">Home</Link>
				<Link to="/login">Login</Link>
				<Link to="/register">Registar</Link>
			</div>
			<Outlet />
			<div>
				<p>Rodape</p>
			</div>
		</>
	)
}
