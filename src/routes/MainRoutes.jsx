import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Events from "../pages/component-overview/Events/Events";
import Event from "../pages/component-overview/Event/Event";
import AddEvent from "../pages/component-overview/AddEvent/AddEvent";
import Login from "../pages/authentications/Login/Login";
import Register from "../pages/authentications/Register/Register";
import PrivateRoute from "./PrivateRoutes";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/event",
        element: <Events />,
      },
      {
        path: "/event/:id",
        element: <Event />,
      },
      {
        path: "/addEvent",
        element: (
          <PrivateRoute>
            <AddEvent />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default MainRoutes;
