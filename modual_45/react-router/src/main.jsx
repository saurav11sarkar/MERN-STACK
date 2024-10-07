import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './compoments/Home/Home.jsx';
import About from './compoments/About/About.jsx';
import Contact from './compoments/Contact/Contact.jsx';
import User from './compoments/User/User.jsx';
import UserDetile from './compoments/User/UserDetile.jsx';
import Posts from './compoments/Posts/Posts.jsx';
import Post from './compoments/Posts/Post.jsx';
import PostDelails from './compoments/Posts/PostDelails.jsx';
import Error from './compoments/Errors/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/App',
        element: <App></App>
      },
      {
        path: '/user',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <User></User>
      },
      {
        path: '/user/:userid',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        element: <UserDetile></UserDetile>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>

      },
      {
        path: '/posts/:postsid',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postsid}`),
        element: <PostDelails></PostDelails>
      },

    ]
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
