import { createHashRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import AllBooks from "./pages/AllBooks";
import Notifications from "./pages/Notifications";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "tat-ca-sach", Component: AllBooks },
      { path: "thong-bao", Component: Notifications },
      { path: "ho-tro", Component: Support },
      { path: "*", Component: NotFound },
    ],
  },
]);
