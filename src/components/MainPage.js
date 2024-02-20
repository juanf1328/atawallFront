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

    
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
   <div class="search">
  <input type="text" placeholder="Search..." />
</div>


<div className="bell-icon">
<span className="iconbell"></span> 
<span className="iconmenu"></span>
</div>

<div className="bell-icon">
 
</div>



      <div className='container'>
      <div>
        <h1 style={{fontSize:'1rem', marginBottom:'1rem', textAlign:'center'}}>Nombre Empresa</h1>
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
        <div>
          <h2 style={{fontSize:'20px', marginLeft:'3rem'}}><span className="iconata"></span>Atawall</h2>
        
        </div>

      </div>
    </form>
  );
};

export default MainPage;
