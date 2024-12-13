import { useRoutes } from "react-router-dom"
import Home from "../view/home";
import CursoPage from "../view/cursosPDF";

export const MainRouter = () => {
  const router = useRoutes([
    {path: "/", element: <Home />},
    {path: "/curso", element: <CursoPage />}
  ])

  return router;
}