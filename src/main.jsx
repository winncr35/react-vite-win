import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import UsersPage from './pages/user.jsx';
import ProductsPage from './pages/product.jsx';
import './styles/global.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; // import công cụ
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/users",
    element: <UsersPage />
  },
  {
    path: "/products",
    element: <ProductsPage />
  }

]); // khai báo route

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    {/* <App /> */}
  </React.StrictMode>,
)
