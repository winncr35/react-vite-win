import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
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
    element: <div>login page</div>
  },
  {
    path: "/register",
    element: <div>register page</div>
  },
  {
    path: "/users",
    element: <div>users page</div>
  },
  {
    path: "/products",
    element: <div>products page</div>
  }

]); // khai báo route

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    {/* <App /> */}
  </React.StrictMode>,
)
