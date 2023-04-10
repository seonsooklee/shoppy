import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import AllProducts from "../pages/AllProducts";
import Detail from "../pages/Detail";
import Cart from "../pages/Cart";
import Update from "../pages/Update";
import Home from "../pages/Home";
import ProtectedRoute from "../pages/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: 'products',
        element: <AllProducts/>
      },
      {
        path: 'product/new',
        element: (
          <ProtectedRoute requireAdmin>
            <Update/>
          </ProtectedRoute>
        )
      },
      {
        path: 'product/:id',
        element: <Detail/>
      },
      {
        path: 'cart',
        element: (
          <ProtectedRoute>
            <Cart/>
          </ProtectedRoute>
        )
      }
    ]
  }
])
