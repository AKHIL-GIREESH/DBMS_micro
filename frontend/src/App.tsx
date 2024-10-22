import { useState } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter,RouterProvider } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Book Your Show
    </>
  )
}

export default App
