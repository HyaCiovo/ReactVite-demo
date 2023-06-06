import React from "react";
import ErrorPage from "@/pages/404";
import { Route, Routes } from "react-router-dom";


interface router {
  name: string,
  path: string;
  element: any;
  children?: Array<router>;
}

const routers: Array<router> = [
  {
    name: "Home",
    path: "/",
    element: React.lazy(() => import("@/pages/home")),
  },
  {
    name: "About",
    path: "about",
    element: React.lazy(() => import("@/pages/about")),
  },
  {
    name: "Test",
    path: "test",
    element: React.lazy(() => import("@/pages/test")),
  },
  {
    name: "404",
    path: "*",
    element: ErrorPage,
  },
];

const Router = () => {
  return (
    <Routes>
      {routers.map(item => {
        return <Route
          key={item.name}
          path={item.path}
          element={
            <React.Suspense>
              <item.element />
            </React.Suspense>
          } />
      })}
    </Routes>
  )
}
export default Router;
