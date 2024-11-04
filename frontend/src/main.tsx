import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Login from "../pages/Login/Login.tsx"
import SignUp from "../pages/SignUp/SignUp.tsx"
import Movie from "../pages/Movie/Movie.tsx"
import TheatreSelection from "../pages/Movie/MovieParamSelection.tsx"
import { QueryClient, QueryClientProvider } from 'react-query'
import MgrHome from "../pages/Mgr/MgrHome.tsx"
import LoginMgr from "../pages/Login/LoginMgr.tsx"
import SignUpMgr from "../pages/SignUp/SignUpMgr.tsx"
import Booking from "../pages/Movie/Booking.tsx"

const queryClient = new QueryClient();


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
  },
  {
    path:"/loginMgr",
    element:<LoginMgr/>,
  },
  {
    path:"/signupMgr",
    element:<SignUpMgr/>
  },
  {
    path:"/Mgr/Dashboard",
    element:<MgrHome/>,
  },
  {
    path:"/:id/theatre/:sid",
    element:<Booking/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
