import React from "react";
import { createBrowserRouter,Outlet } from "react-router-dom";
import App from "../App";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import Navbar from "../components/Navbar";


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
        element:<App/>
    },
    {
        path: "/flat",
        element:  <h1>Flats</h1>
    },   
    {
        path: "/about",
        element:  <h1>A propos</h1>          
    },
       
      ]

},


]);