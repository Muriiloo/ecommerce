import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";

import Layout from "./components/Layout";
import Cart from "./pages/cart";
import Detail from "./pages/detail";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/produtos/:id",
                element: <Detail/>
            }
        ]
    }
])

export { router };