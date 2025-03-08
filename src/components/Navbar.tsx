import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="bg-black h-16 p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-3xl font-bold">Kb_Sport3</h1>

        {/* Links de navegación */}
        <div className="space-x-8 text-lg">
          <Link to="/" className="nav-link">Catálogo</Link>
          <Link to="/contacto" className="nav-link">Contacto</Link>
          <Link to="/sobre-nosotros" className="nav-link">Más sobre nosotros</Link>
          <Link to="/login" className="login-button">Iniciar Sesión</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
