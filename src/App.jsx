import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import NoPage from './pages/noPage/NoPage'
import ProductInfo from './pages/productInfo/ProductInfo'
import ScrollTop from './components/scrollTop/ScrollTop'
import CartPage from './pages/cart/CartPage'
import AllProduct from './pages/allProduct/AllProduct'
import Signup from './pages/registration/Signup'
import Login from './pages/registration/Login'
import UserDashboard from './pages/user/UserDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import AddProductPage from './pages/admin/AddProductPage'
import UpdateProductPage from './pages/admin/UpdateProductPage'
import MyState from './context/myState'

function App() {
 
  const appRouter = createBrowserRouter([
   <ScrollTop/>, {
      path:'/',
      element:<HomePage/>
    },
    {
      path:'/*',
      element:<NoPage/>
    },
    {
      path:'/productinfo',
      element:<ProductInfo/>
    },
    {
      path:'/cart',
      element:<CartPage/>
    },
    {
      path:'/allproduct',
      element:<AllProduct/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/user-dashboard',
      element:<UserDashboard/>
    },
    {
      path:'/admin-dashboard',
      element:<AdminDashboard/>
    },
    {
      path:'/addproduct',
      element:<AddProductPage/>
    },
    {
      path:'/updateproduct',
      element:<UpdateProductPage/>
    }
  ])

return (
  <div>
    <MyState>
      <RouterProvider router={appRouter} />
    </MyState>
     

   
  </div>
)
}

export default App
