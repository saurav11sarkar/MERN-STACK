import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Jobs from './components/Jobs/Jobs.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import JobDetiles from './components/JobDetiles/JobDetiles.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/jobs/:id',
        element: <JobDetiles></JobDetiles>,
        loader: ()=>fetch('/jobs.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
