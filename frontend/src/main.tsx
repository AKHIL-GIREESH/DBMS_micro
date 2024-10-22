import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Login from "../pages/Login/Login.tsx"
import SignUp from "../pages/SignUp/SignUp.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path:"/login",
    element:<Login/>
  }, 
  {
    path:"/signup",
    element:<SignUp/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
