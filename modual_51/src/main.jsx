import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './provider/AuthProvider';
import Orders from './components/Orders';
import PrivateRouts from './Routes/PrivateRouts';
import Profile from './components/Profile';
import DashBoard from './components/DashBoard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/orders",
        element: <PrivateRouts><Orders/></PrivateRouts>
      },
      {
        path: "/profile",
        element: <PrivateRouts><Profile/></PrivateRouts>
      },
      {
        path: "/dashbord",
        element: <PrivateRouts><DashBoard/></PrivateRouts>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
