// Importa React y la función useState desde la librería React
import React, { useState } from 'react';

// Importa el hook useNavigate desde React Router para la navegación
import { useNavigate } from 'react-router-dom';

// Importa el archivo CSS para estilizar el componente Formulario
import './Formulario.css';

// Define el componente Formulario como una función
const Formulario = () => {
  // Obtiene la función navigate para cambiar de página cuando sea necesario
  const navigate = useNavigate();

  // Define el estado inicial de los datos del formulario y una función para actualizarlos
  const [datos, setDatos] = useState({
    pais: '',
    nombreLegal: '',
    rubro: '',
    telefono: '',
    responsableAlta: '',
    apellidoYNombre: '',
    mail: '',
  });

  // Función que se ejecuta al cambiar algún campo del formulario
  const handleChange = (e) => {
    // Actualiza el estado de los datos con los nuevos valores introducidos por el usuario
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    // Previene el comportamiento por defecto del evento (enviar el formulario y recargar la página)
    e.preventDefault();
    // Muestra los datos del formulario en la consola
    console.log('Datos del formulario:', datos);
    // Navega a la página /CompanyRegister2
    navigate('/CompanyRegister2');
  };

  // Renderiza el formulario con sus campos y utiliza los valores de estado y las funciones de manejo de cambios y envío
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white px-4">
      <h1 className="text-2xl font-semibold mb-8">Cuenta Empresa</h1>
      <p className="text-lg mb-8">Complete el siguiente formulario <span className="iconEmp"></span></p>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        {/* Campos del formulario */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {/* Select para seleccionar el país */}
            <select
              className="custom-select"
              name="pais"
              value={datos.pais}
              onChange={handleChange}
            >
              <option value="">País</option>
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-3">
            {/* Select para seleccionar el rubro */}
            <select
              className="custom-select"
              name="rubro"
              value={datos.rubro}
              onChange={handleChange}
            >
              <option value="">Rubro</option>
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
            </select>
          </div>
        </div>
        {/* Más campos del formulario (nombre legal, teléfono, nombre y apellido, correo electrónico) */}
        {/* Input para el nombre legal */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="custom-input"
              type="text"
              name="nombreLegal"
              value={datos.nombreLegal}
              onChange={handleChange}
              placeholder="Nombre Legal"
            />
          </div>
          {/* Input para el teléfono */}
          <div className="w-full md:w-1/2 px-3">
            <input
              className="custom-input"
              type="text"
              name="telefono"
              value={datos.telefono}
              onChange={handleChange}
              placeholder="Teléfono"
            />
          </div>
        </div>
        {/* Input para el nombre y apellido */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <input
              className="custom-input"
              type="text"
              name="apellidoYNombre"
              value={datos.apellidoYNombre}
              onChange={handleChange}
              placeholder="Apellido y Nombre"
            />
          </div>
        </div>
        {/* Input para el correo electrónico */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <input
              className="custom-input"
              type="email"
              name="mail"
              value={datos.mail}
              onChange={handleChange}
              placeholder="Mail"
            />
          </div>
        </div>
        {/* Botón para enviar el formulario */}
        <button className="custom-button" type="submit">Continuar</button>
      </form>
    </div>
  );
};

// Exporta el componente Formulario para que pueda ser utilizado en otros archivos
export default Formulario;
