import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About } from './About.jsx'
import Login from './Login.jsx'
import { AuthProvider } from './AuthContext.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

const router = createBrowserRouter([
    {
        path:"/",
        element:<ProtectedRoute><Layout/></ProtectedRoute>,
        children:[
            {
                path:"/",
                element:<ProtectedRoute><App/></ProtectedRoute>
            },
            {
                path:"/about",
                element: <ProtectedRoute><About/></ProtectedRoute>
            },{
                path:"/login",
                element:<Login/>
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <RouterProvider router={router}/>
    </AuthProvider>
)
