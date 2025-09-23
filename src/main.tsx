import App from "./App.tsx";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Home } from "./component/pages/Home.tsx";
import { About } from "./component/pages/About.tsx";
import { News } from "./component/pages/News.tsx";
import { Event } from "./component/pages/Event.tsx"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/about",
        element: <About />,
      }, 
    ],
  },
  // {
  //   path: "*",  // Route catch-all pour les 404
  //   element: <NotFound />
  // }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
