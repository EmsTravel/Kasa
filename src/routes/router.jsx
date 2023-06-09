import React from "react";
import { createBrowserRouter,Outlet } from "react-router-dom";
import HomePage from "../pages/Homepage";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import Navbar from "../components/Navbar";
import ApartmentPage from "../pages/ApartmentPage";


// layout created with Outlet
const HeaderFooterLayout = () => {
    return <>
        <Navbar />
        <Main>
        <Outlet />
        </Main>
        <Footer />
    </>
}

//  creation of routes and injecting the paths with children
export const router = createBrowserRouter ([
{
      element: <HeaderFooterLayout/>,
      errorElement: <h1> 404 page not found</h1>,

      children:[
       { 
        path: "/",
        element:<HomePage />
    },
    {
        path: "/flat",
        element: <ApartmentPage />
    },   
    {
        path: "/about",
        element:  <h1>A propos</h1>          
    },
       
      ]
},
 
]);