import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './Pages/Home.jsx';
import Help from './Pages/Help.jsx';
import TrackOrder from './Pages/TrackOrder.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import Blog from './Pages/Blog.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/help",
        element: <Help></Help> ,
      },
      {
        path: "/trackorder",
        element: <TrackOrder></TrackOrder> ,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs> ,
      },
      {
        path: "/blog",
        element: <Blog></Blog> ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
