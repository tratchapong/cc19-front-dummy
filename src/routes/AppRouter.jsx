import {createBrowserRouter, Navigate, RouterProvider} from 'react-router'
import App from '../App'
import Login from '../pages/Login'
import useUserStore from '../stores/userStore'

const guestRouter = createBrowserRouter([
	{ path : '/', element : <Login /> },
	{ path : '*', element : <Navigate to='/' />}
])

const userRouter = createBrowserRouter([
	{ path : '/', element : <App />,
		children : [
			{ index: true, element: <App />},
			{ path : '*', element : <Navigate to='/' />}
		]
	},
])

export default function AppRouter() {
	const user = useUserStore(state => state.user)
	const finalRouter = user ? userRouter : guestRouter
    return (
        <RouterProvider key={user?.id} router={finalRouter} />
    )
}
