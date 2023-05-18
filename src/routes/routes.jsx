import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Blog from "../pages/Blog/Blog";
import AllToys from "../pages/AllToys/AllToys";
import AddToy from "../pages/AddToy/AddToy";
import MyToy from "../pages/MyToy/MyToy";


import Home from "../pages/Home/Home/Home";


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
                path: "/blog",
                element: <Blog></Blog>,
              },
              {
                path: "/alltoys",
                element: <AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/alltoys')
              },
              {
                path: "/addtoy",
                element: <AddToy></AddToy>,
              },
              {
                path: "/mytoy",
                element: <MyToy></MyToy>,
              },
            ]
    },



    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
          {
            path: "login",
            element: <Login></Login>,
          },
          {
            path: "register",
            element: <Register></Register>,
          },
        ],
      }
])

export default router;