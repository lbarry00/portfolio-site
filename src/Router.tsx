import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "./shared/GlobalLayout";

const Index = lazy(() => import("./pages/Index"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [{ index: true, element: <Index /> }]
  }
]);

export const Router = () => <RouterProvider router={router} />;
