import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Formulario.css';

const Formulario = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', datos);

    
    navigate('/CompanyRegister2');
  };

  const [datos, setDatos] = useState({
    pais: '',
    nombreLegal: '',
    rubro: '',
    telefono: '',
    responsableAlta: '',
    apellidoYNombre: '',
    mail: '',
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white px-4">
      <h1 className="text-2xl font-semibold mb-8">Cuenta Empresa</h1>
      <p className="text-lg mb-8">Complete el siguiente formulario <span className="iconEmp"></span></p>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
        <button className="custom-button" type="submit">Continuar</button>
      </form>
    </div>
  );
};


export default Formulario;