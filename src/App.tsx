// src/App.tsx
import Navbar from "./components/navbar";
import "./style.scss";

export function App() {
  return (
    <div className="app-container">
      <Navbar></Navbar>
      <h1>Hello World</h1>
    </div>
  );
}
