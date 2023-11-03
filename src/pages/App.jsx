import React from "react";
import Home from "./Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../login/Login";
import Profile from "./Profile";
import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { productsData } from "../api/Api";
import Product from "../components/Product";
import PageShop from "./PageShop";
import AboutUs from "./AboutUs";
import Invoice from "./Invoice";
import { useState } from "react";
import { AuthProvider } from "../login/AuthProvider";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        Loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/shop",
        element: <PageShop />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/invoice",
        element: <Invoice />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default function AppWithAuthProvider() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
