import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import ChackOut from "../Pages/CheckOut/ChackOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/singup',
          element: <SingUp></SingUp>
        },
        {
          path: '/chackout/:id', //BookService
          element: <PrivetRoutes><ChackOut></ChackOut></PrivetRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/booking',
          element: <PrivetRoutes><Bookings></Bookings></PrivetRoutes>
        }
      ]
    },
  ]);

export default router;