import "./App.css";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
