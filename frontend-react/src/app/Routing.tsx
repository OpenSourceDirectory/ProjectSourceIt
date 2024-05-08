import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navigation from "./Navigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
  },
  {
    path: "/About",
    element: <div>{'This is an about page'}</div>,
  },
]);

export const RouteHandler = () => {
    return (        
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}