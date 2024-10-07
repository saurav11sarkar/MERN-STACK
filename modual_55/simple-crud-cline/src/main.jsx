import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import User from './components/User.jsx';
import Update from './components/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
  },
  {
    path: '/users',
    element: <User></User>,
    loader: () => fetch('http://localhost:5000/users')
  },
  {
    path: '/update/:id',
    element: <Update></Update>,
    loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
