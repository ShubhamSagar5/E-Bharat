import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import NoPage from './pages/noPage/NoPage'


function App() {
 
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<HomePage/>
    },
    {
      path:'/*',
      element:<NoPage/>
    }
  ])

return (
  <div>
    <RouterProvider router={appRouter} />
  </div>
)
}

export default App
