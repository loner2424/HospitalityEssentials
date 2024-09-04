import "./App.css";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import routes from "./routes";
import { Route, Routes } from "react-router-dom";
import GetInTouch from "./sections/GetInTouch";

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero />
      <Overview />
      <Services />
      <Clients />
      <Awards />
      <GetInTouch /> */}
      <Routes>
        {routes.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            name={item.name}
            element={item.element}
          />
        ))}
      </Routes>
      <GetInTouch/>
      <Footer />
    </>
  );
}

export default App;
