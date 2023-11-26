import { createBrowserRouter } from "react-router-dom";
import { App } from "../App.tsx";
import { Dashboard } from "../components/dashboard/Dashboard";
import { SessionDetails } from "../components/session/detailsSession/SessionDetails";
import { SessionNew } from "../components/session/newSession/SessionNew.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
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
    ],
  },
]);
