import About from "./pages/About/About";
import Home from "./pages/Home/Home";

const routes = [
  {
    exact: true,
    isPublic: true,
    path: "/",
    name: "home",
    element: ( <Home /> ),
  },
  {
    exact: true,
    isPublic: true,
    path: "/about",
    name: "About",
    element: ( <About /> ),
  },
];

export default routes;