import { createBrowserRouter } from "react-router-dom";
import Employees from "../pages/employees";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Employees />,
  },
]);

export { router };
