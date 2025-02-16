import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Components/Root/Root.jsx';
import Statics from './Components/Statics/Statics.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import ProductContainer from './Components/ProductContainer/ProductContainer.jsx';
import Details from './Components/Details/Details.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import CartItem from './Components/CartItem/CartItem.jsx';
import UpcomingItems from './Components/UpcomingItems/UpcomingItems.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: 'upcomingitems',
        element: <UpcomingItems></UpcomingItems>,
        loader: () => fetch('/newData.json')
      },
      {
        path: "statics",
        element: <Statics></Statics>,
        loader: () => fetch('/data.json')
      },
      {
        path: "productContainer",
        element: <ProductContainer></ProductContainer>
      },
      {
        path: "details/:id",
        element: <Details></Details>,
        loader: () => fetch('/data.json')
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "cart-item",
        element: <CartItem></CartItem>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
