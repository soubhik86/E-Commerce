import { Header } from "./component/layouts/Header"

import { Root } from "./component/layouts/Root";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { Product } from "./component/pages/Product";

import { Cart } from "./component/pages/Cart";
import { Productdetails } from "./component/pages/Productdetails";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import UserLogin from "./component/pages/UserLogin";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Product/>
      },
  
      {
        path: "login",
        element: <UserLogin/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      
      {
        path:"/cart/:id",
        element: <Cart/>
      },

      {
        path: "cart",
        element: <Cart/>
      },

      {
        path: "/product/:id",
        element: <Productdetails/>
      }
   

    ],
  },
]);



function App() {
 

  return (
   <>
  <RouterProvider router={router} />

   </>
  )
}

export default App
