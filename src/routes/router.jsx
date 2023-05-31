import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


//  creation of routes
export const router = createBrowserRouter ([
{
  path: "/",
  element: (
      <>
      <App />
      </>
  ),
  errorElement: <h1> 404 page not found</h1>
},
{
    path: "/flat",
    element: (
        <>
        <Navbar />
        <h1>Flats</h1>
        <Footer />
        </>
    )
},
{
    path: "/about",
    element: (
        <>
        <Navbar />
        <h1>A propos</h1>
        <Footer />
        </>
    )
},
]);