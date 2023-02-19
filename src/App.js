import React from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Menu from "./Components/Menu/Menu";
import CategoryPage from "./Components/CategoryPage/CategoryPage";
import ProductPage from "./Components/ProductPage/ProductPage";
import BuyUsPage from "./Components/BuyUsPage/BuyUsPage"
import AboutUsPage from "./Components/AboutUsPage/AboutUsPage";
import ForPartnersPage from "./Components/ForPartnersPage/ForPartnersPage";

import {createBrowserRouter, RouterProvider,} from "react-router-dom";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },

    {
        path: "/menu",
        element: <Menu />,
    },

    {
        path: "/category",
        element: <CategoryPage />,
    },

    {
        path: "/product",
        element: <ProductPage />,
    },

    {
        path: "/buy-us",
        element: <BuyUsPage />,
    },

    {
        path: "/about-us",
        element: <AboutUsPage />,
    },

    {
        path: "/for-partners",
        element: <ForPartnersPage />,
    },

  ]);



function App () {
    return (
        <React.StrictMode>
            <Header />
            <RouterProvider router={router} />
            <Footer />
        </React.StrictMode>
        
    )
}

export default App;