import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './routes/Home/Page'
import Repos from './routes/Repos/Page'
import Dashboard from './routes/Dashboard/Page'
import NotFound from './routes/NotFound/Page'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, // UI Shell containing Header, SideNav and Content
        children: [
            { index: true, element: <Home /> },
            { path: 'dashboard', element: <Dashboard /> },
            { path: 'repos', element: <Repos /> },
            { path: '*', element: <NotFound /> },
        ],
    },
])