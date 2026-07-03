import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "./shared/GlobalLayout";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> }
    ]
  },

  { path: "*", element: <NotFound /> }
]);

export const Router = () => <RouterProvider router={router} />;
