import { createBrowserRouter } from "react-router-dom";
import Root from "./Root.tsx";
import Main from "./Main.tsx";
import Admin from "./Admin.tsx";
import LogIn from "./LogIn.tsx";
import Shopping_Cart from "./Shopping_Cart.tsx";
const routs = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      { path: "/Main", element: <Main /> },
      { path: "/Admin", element: <Admin /> },
      { path: "/Shopping_Cart", element: <Shopping_Cart /> },
      { path: "/LogIn", element: <LogIn /> },
    ],
  },
]);
export default routs;
