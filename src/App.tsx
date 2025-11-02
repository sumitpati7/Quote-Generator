// src/App.tsx
import Navbar from "./components/navbar";
import "./style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";

export function App() {
  return (
    <div className="app-container bg-bg dark:bg-dark color-primary">
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}
