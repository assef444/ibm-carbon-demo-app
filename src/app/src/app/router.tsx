import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './routes/Home'
import Dashboard from './routes/Dashboard'
import NotFound from './routes/NotFound'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, // UI Shell containing Header, SideNav and Content
        children: [
            { index: true, element: <Home /> },
            { path: 'dashboard', element: <Dashboard /> },
            { path: '*', element: <NotFound /> },
        ],
    },
])