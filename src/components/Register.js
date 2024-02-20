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
      navigate('/CompanyRegister1');
    }
  };

  return (
    <div>
      <h1 style={{ fontSize:'2rem', marginBottom:'6rem' }} className="titulo-global"><span className="icon"></span>Atawall</h1>
      <div className="Register">
        <h2 style={{ fontSize:'1rem' }} className="titulo">¿Con qué perfil desea registrarte?</h2>
        <div className="perfiles">
          <button
            className={`perfil ${perfil === "Individuo" ? "perfil-activo" : ""}`}
            onClick={() => handleButtonClick("Individuo")}
            style={{ marginRight: "10px" }}
          >
            Individuo
            <span className="iconIndividuo"></span>
          </button>
          <button
            className={`perfil ${perfil === "Empresa" ? "perfil-activo" : ""}`}
            onClick={() => handleButtonClick("Empresa")}
            style={{ marginRight: "10px" }} 
          >
            Empresa
           <span className="iconEmpresa"></span>
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
          <button disabled className="otro-boton" style={{ backgroundColor: "#14dbad" }}></button>
          <button disabled className="otro-boton" style={{ backgroundColor: "#1b1b1b" }}></button>
          <button disabled className="otro-boton" style={{ backgroundColor: "#1b1b1b" }}></button>
        </div>
      </div>
    </div>
  );
};

export default Register;
