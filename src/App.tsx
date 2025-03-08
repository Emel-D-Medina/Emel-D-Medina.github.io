import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar /> {}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacto" element={<div>Contacto</div>} />
        <Route path="/sobre-nosotros" element={<div>Sobre Nosotros</div>} />
      </Routes>
    </Router>
  );
}

export default App;
