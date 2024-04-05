// MainPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import './Card.css'


import './MainPage.css';

const MainPage = () => {
  // Contenido de la página principal después de iniciar sesión
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Main');

    
    navigate('/');
  };

  const mercadoia = (e) => {
    e.preventDefault();

    
    navigate('/mercadoAI');
  };

  return (
 <div>
    <div>
    <Navbar />
  </div>
      <div className='container'>
       
      <div>
        <h1 style={{fontSize:'1rem', marginBottom:'1rem', textAlign:'center'}}>Nombre Empresa</h1>
        </div>
        <div>
          <button className='main1' onClick={handleSubmit} type="submit">Muro</button>
        </div>
        <div>
          <button className='main1' onClick={mercadoia} type="submit">Mercado AI</button>
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
        <div>
          <h2 style={{fontSize:'20px', marginLeft:'3rem'}}><span className="iconata"></span>Atawall</h2>
        
        </div>

      </div>
      </div>
  );
};

export default MainPage;
