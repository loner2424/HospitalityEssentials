import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Home from './pages/Home.jsx';
import Clients from './pages/Clients.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/clients" element={<Clients />} />
      </Route>

    </Routes>
  </BrowserRouter>
);
