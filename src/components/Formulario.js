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
    <div>
      <h2 className="form-title">Cuenta Empresa</h2>
      <p className="form-subtitle">Complete el siguiente formulario</p>
      <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="half-width">
          <select
            name="pais"
            value={datos.pais}
            onChange={handleChange}
            placeholder="Selecciona un país"
          >
            <option value="">Selecciona un país</option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
           
          </select>
          <select
            name="rubro"
            value={datos.rubro}
            onChange={handleChange}
            placeholder="Selecciona un rubro"
          >
            <option value="">Selecciona un rubro</option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            
          </select>
        </div>
        <input
          type="text"
          name="nombreLegal"
          onChange={handleChange}
          placeholder="Nombre Legal"
        />
        <input
          type="text"
          name="telefono"
          onChange={handleChange}
          placeholder="Tel."
        />
        <label>Responsable de alta</label>
        <input
          type="text"
          name="apellidoYNombre"
          onChange={handleChange}
          placeholder="Apellido y nombre"
        />
        <input
          type="email"
          name="mail"
          onChange={handleChange}
          placeholder="Mail"
        />
        <button onClick={handleSubmit} type="submit">Continuar</button>
        <div className="otros-botones">
          <button disabled className="otro-boton" style={{ backgroundColor: "#1b1b1b" }}></button>
          <button disabled className="otro-boton" style={{ backgroundColor: "#05c988" }}></button>
          <button disabled className="otro-boton" style={{ backgroundColor: "#1b1b1b" }}></button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Formulario;
