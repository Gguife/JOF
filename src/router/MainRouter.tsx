import { useRoutes } from "react-router-dom"
import Home from "../view/home";

export const MainRouter = () => {
  const router = useRoutes([
    {path: "/", element: <Home />}
  ])

  return router;
}