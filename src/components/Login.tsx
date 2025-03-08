import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="title">Kb_Sport3</h2>
        <p className="subtitle">Accede a tu cuenta</p>

        {/* Campos de entrada */}
        <input type="text" placeholder="Usuario" className="input-field" />
        <input type="password" placeholder="Contraseña" className="input-field" />

        {/* Botones de acción */}
        <button className="login-button">Ingresar</button>
        <button className="register-button">Registrarme</button>

        {/* Enlace para recuperar contraseña */}
        <Link to="/recuperar" className="forgot-password">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
    </div>
  );
};

export default Login;
