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
import { Toaster } from 'react-hot-toast'
import { ProtectedRouteForUser } from './protectedRoute/ProtectedRouteForAdmin'
import { ProtectedRouteForAdmin } from './protectedRoute/ProtectedRouteForUser'
import CategoryPage from './pages/category/CategoryPage'

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
      path:'/productinfo/:id',
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
      element:<ProtectedRouteForUser><UserDashboard/></ProtectedRouteForUser>
    },
    {
      path:'/admin-dashboard',
      element:<ProtectedRouteForAdmin><AdminDashboard/></ProtectedRouteForAdmin>
    },
    {
      path:'/addproduct',
      element:<ProtectedRouteForAdmin><AddProductPage/></ProtectedRouteForAdmin>
    },
    {
      path:'/updateproduct/:id',
      element:<ProtectedRouteForAdmin><UpdateProductPage/></ProtectedRouteForAdmin>
    },
    {
      path:'/category/:categoryname',
      element:<CategoryPage/>
    }
    
  ])

return (
  <div>
    <MyState>
    <Toaster/>
      <RouterProvider router={appRouter} />
    </MyState>
     

   
  </div>
)
}

export default App
