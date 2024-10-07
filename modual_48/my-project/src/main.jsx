import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import ListedBook from './components/ListedBook/ListedBook';
import PagesToRead from './components/Pages/PagesToRead';
import BookDetiles from './components/Books/BookDetiles';
import { HelmetProvider  } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/list',
        element:<ListedBook></ListedBook>,
        loader: () => fetch('/book.json')
      },
      {
        path: '/page',
        element:<PagesToRead></PagesToRead>
      },
      {
        path: '/list/:bookId',
        element:<BookDetiles></BookDetiles>,
        loader: () => fetch('/book.json')
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    
  </StrictMode>,
)
