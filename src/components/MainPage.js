// MainPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './MainPage.css';

const MainPage = () => {
  // Contenido de la página principal después de iniciar sesión
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Main');

    
    navigate('/finish');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='conteiner'>
      <div>
        <h1>Main Page</h1>
        </div>
        <div>
          <button className='main1' onClick={handleSubmit} type="submit">Muro</button>
        </div>
        <div>
          <button className='main1' type="submit">Mercado AI</button>
        </div>
        <div>
          <button className='main1' type="submit">Cuentas</button>
        </div>
        <div>
          <button className='main1' type="submit">Ayuda</button>
        </div>
        <div>
          <button className='main1' type="submit">Salir</button>
        </div>

      </div>
    </form>
  );
};

export default MainPage;
