import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import FeedCard from "./src/component/FeedCard"
import Header from "./src/component/Header"
import { result } from "./src/utils/mockdata"
import Loader from "./src/component/Loader"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Home from "./src/screens/home"

import NotFoundPage from "./src/screens/not-found"
import AboutUs from "./src/screens/about-us"
import ContactUs from "./src/screens/contact-us"
import Footer from "./src/component/Footer"
import Restaurant from "./src/screens/restaurant"
import RestaurantDetailScreen from "./src/screens/restaurant-details"

const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      },
      {
        path: "/restaurants",
        element: <Restaurant />
      },
      {
        path: "/restaurant-detail/:id",
        element: <RestaurantDetailScreen />
      }

      
    ]

  },

]);


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)