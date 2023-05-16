import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Layout/Main";
import Home from "./components/Home/Home";
import AddJob from "./components/pages/AddJob";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import AuthProvider from "./components/pages/AuthProvider";
import MyJob from "./components/pages/MyJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'addjob',
        element:<AddJob></AddJob>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/myjob',
        element:<MyJob></MyJob>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto p-10'>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    </div>
  </React.StrictMode>
);
