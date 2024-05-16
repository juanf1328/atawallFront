// Importaciones de React, useState y useNavigate
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación
import "./Register.css"; // Importa estilos CSS para el componente

// Componente funcional Register
const Register = () => {
  const [perfil, setPerfil] = useState("Individuo"); // Estado para el perfil seleccionado
  const navigate = useNavigate(); // Función de navegación

  // Función para manejar el clic en un botón de perfil
  const handleButtonClick = (selectedPerfil) => {
    setPerfil(selectedPerfil); // Actualiza el perfil seleccionado
  };

  // Función para manejar el clic en el botón de continuar
  const handleContinueClick = () => {
    // Redirige al usuario a la página de registro solo si el perfil es "Empresa"
    if (perfil === "Empresa") {
      navigate('/CompanyRegister1'); // Navega a la página CompanyRegister1
    }
  };

  // Renderizado del componente
  return (
    <div>
      <h1 style={{ fontSize:'2rem', marginBottom:'6rem' }} className="titulo-global"><span className="icon"></span>Atawall</h1>
      <div className="Register"> {/* Contenedor del formulario de registro */}
        <h2 style={{ fontSize:'1rem' }} className="titulo">¿Con qué perfil desea registrarte?</h2> {/* Título del formulario */}
        <div className="perfiles"> {/* Contenedor de los botones de perfil */}
          {/* Botón para seleccionar perfil "Individuo" */}
          <button
            className={`perfil ${perfil === "Individuo" ? "perfil-activo" : ""}`}
            onClick={() => handleButtonClick("Individuo")}
            style={{ marginRight: "10px" }}
          >
            Individuo
            <span className="iconIndividuo"></span> {/* Icono para perfil individuo */}
          </button>
          {/* Botón para seleccionar perfil "Empresa" */}
          <button
            className={`perfil ${perfil === "Empresa" ? "perfil-activo" : ""}`}
            onClick={() => handleButtonClick("Empresa")}
            style={{ marginRight: "10px" }} 
          >
            Empresa
           <span className="iconEmpresa"></span> {/* Icono para perfil empresa */}
          </button>
          {/* Botón para seleccionar perfil "Proveedor" */}
          {/* <button
            className={`perfil ${perfil === "Proveedor" ? "perfil-activo" : ""}`}
            onClick={() => handleButtonClick("Proveedor")}
          >
            <i className="fa fa-truck"></i>
            Proveedor
          </button> */}
        </div>
        <p className="perfil-descripcion"> {/* Descripción del perfil seleccionado */}
          Perfil de cuenta destinado a todo tipo de Empresas que bla bla Ipsum is
          simply dummy text of the printing and typesetting industry.
        </p>

        {/* Botón para continuar */}
        <button onClick={handleContinueClick} className="registrarme">
          <i className="fa fa-paper-plane"></i> {/* Icono de avión de papel */}
          Registrarme
        </button>

        {/* Contenedor para otros botones (actualmente deshabilitados) */}
        <div className="otros-botones">
          <button disabled className="otro-boton" style={{ backgroundColor: "#14dbad" }}></button>
          <button disabled className="otro-boton" style={{ backgroundColor: "#1b1b1b" }}></button>
          <button disabled className="otro-boton" style={{ backgroundColor: "#1b1b1b" }}></button>
        </div>
      </div>
    </div>
  );
};

export default Register; // Exporta el componente Register
