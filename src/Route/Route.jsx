import { createBrowserRouter } from "react-router-dom";

import Home from "../Page/Home/Home";
import App from "../App";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/",
          element:<Home></Home>,
        },
      ]
    }

  ]);

