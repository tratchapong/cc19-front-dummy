import {createBrowserRouter, Navigate, RouterProvider} from 'react-router'
import App from '../App'
import Login from '../pages/Login'

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
    return (
        <RouterProvider router={guestRouter} />
    )
}
