import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About } from './About.jsx'
import Login from './Login.jsx'
import { AuthProvider } from './AuthContext.jsx'

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<App/>
            },
            {
                path:"/about",
                element:<About/>
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
