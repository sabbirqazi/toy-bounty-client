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
import UpdateToys from "../UpdateToys/UpdateToys";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/Shared/ViewDetails";
import ErrorPage from "../pages/ErrorPage/Errorpage";

/* import ViewDetails from "../pages/Shared/ViewDetails";
import PrivateRoute from "./PrivateRoute"; */


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
                loader: () => fetch(`http://localhost:5000/alltoys`)
              },
               { path: "/alltoys/:id",
                element: (
                    <PrivateRoute>
                      <ViewDetails></ViewDetails>
                    </PrivateRoute>
                    )
               },
              {
                path: "/addtoy",
                element: <AddToy></AddToy>,
              },
              {
                path: "/mytoys",
                element: <MyToy></MyToy>,
              },
              {
                path: "/mytoys/:id",
                element: <UpdateToys></UpdateToys>,
                loader: ({params}) => fetch(`http://localhost:5000/mytoys/${params.id}`)
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