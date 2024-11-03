import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Login from "../pages/Login/Login.tsx"
import SignUp from "../pages/SignUp/SignUp.tsx"
import Movie from "../pages/Movie/Movie.tsx"
import TheatreSelection from "../pages/Movie/MovieParamSelection.tsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path:"/:id",
    element:<Movie/>
  },
  {
    path:"/:id/theatre",
    element:<TheatreSelection/>,
  },
  // {
  //   path:"/:id/theatre/"
  // },
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
