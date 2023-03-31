import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Products from "../pages/Products";
import Detail from "../pages/Detail";
import Cart from "../pages/Cart";
import Update from "../pages/Update";
import Home from "../pages/Home";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'products/detail',
        element: <Detail />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'update',
        element: <Update />
      }
    ]
  }
])
