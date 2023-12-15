import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Register.css";

const Register = () => {
  const [perfil, setPerfil] = useState("Individuo");
  const navigate = useNavigate();


  const handleButtonClick = (selectedPerfil) => {
    setPerfil(selectedPerfil);
  };

  const handleContinueClick = () => {
    // Redirige al usuario a la página de registro solo si el perfil es "Empresa"
    if (perfil === "Empresa") {
      navigate('/register2');
    }
  };

  return (
    <div>
      <h1 className="titulo-global">atawall</h1>
      <div className="Register">
        <h1 className="titulo">¿Con qué perfil desea registrarte?</h1>
        <div className="perfiles">
          <button
            className={`perfil ${perfil === "Individuo" ? "perfil-activo" : ""}`}
            onClick={() => handleButtonClick("Individuo")}
            style={{ marginRight: "10px" }}
          >
            <i className="fa fa-user"></i>
            Individuo
          </button>
          <button
            className={`perfil ${perfil === "Empresa" ? "perfil-activo" : ""}`}
            onClick={() => handleButtonClick("Empresa")}
            style={{ marginRight: "10px" }} 
          >
            <i className="fa fa-building"></i>
            Empresa
          </button>
          {/* <button
            className={`perfil ${perfil === "Proveedor" ? "perfil-activo" : ""}`}
            onClick={() => handleButtonClick("Proveedor")}
          >
            <i className="fa fa-truck"></i>
            Proveedor
          </button> */}
        </div>
        <p className="perfil-descripcion">
          Perfil de cuenta destinado a todo tipo de Empresas que bla bla Ipsum is
          simply dummy text of the printing and typesetting industry.
        </p>

        <button onClick={handleContinueClick} className="registrarme">
          <i className="fa fa-paper-plane"></i>
          Registrarme
        </button>

        <div className="otros-botones">
          <button className="otro-boton" style={{ backgroundColor: "#05c988" }}></button>
          <button className="otro-boton" style={{ backgroundColor: "#1b1b1b" }}></button>
          <button className="otro-boton" style={{ backgroundColor: "#1b1b1b" }}></button>
        </div>
      </div>
    </div>
  );
};

export default Register;
