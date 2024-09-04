import About from "./pages/About/About";
import Clients from "./pages/Clients/Clients";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";

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
  {
    exact: true,
    isPublic: true,
    path: "/clients",
    name: "Clients",
    element: ( <Clients /> ),
  },
  {
    exact: true,
    isPublic: true,
    path: "/services",
    name: "Services",
    element: ( <Services /> ),
  },
  {
    exact: true,
    isPublic: true,
    path: "/contact",
    name: "Contact",
    element: ( <Contact /> ),
  },
];

export default routes;