import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import ErrorBoundary from '../components/ErrorBoundary'

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorBoundary />,
    },
  ])

  return <RouterProvider router={router} />
}

export default Router
