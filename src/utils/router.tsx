import { createBrowserRouter } from "react-router-dom";
import { App } from "../App.tsx";
import { Dashboard } from "../components/dashboard/Dashboard";
import { SessionDetails } from "../components/session/detailsSession/SessionDetails";
import { SessionNew } from "../components/session/newSession/SessionNew.tsx";
import { Login } from "../components/loginPage/Login.tsx";
import { Register } from "../components/loginPage/Register.tsx";
import { PageNotFound } from "../components/errorPages/PageNotFound.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "new-session",
        element: <SessionNew />,
      },
      {
        path: "session-details/:id",
        element: <SessionDetails />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
