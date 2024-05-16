// Importaciones de React y estilos
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación
import Navbar from './navbar'; // Importa el componente Navbar
import './Card.css'; // Importa estilos CSS para el componente Card

// Importa estilos CSS para el componente MainPage
import './MainPage.css';

// Componente MainPage
const MainPage = () => {
  const navigate = useNavigate(); // Función de navegación

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Main');
    navigate('/'); // Navega a la página principal
  };

  // Función para manejar el clic en el botón de mercado IA
  const mercadoia = (e) => {
    e.preventDefault();
    navigate('/mercadoAI'); // Navega a la página de mercado AI
  };

  // Renderizado del componente
  return (
    <div>
      <div>
        <Navbar /> {/* Barra de navegación */}
      </div>
      <div className='container'> {/* Contenedor principal */}
        <div>
          <h1 style={{fontSize:'1rem', marginBottom:'1rem', textAlign:'center'}}>Nombre Empresa</h1> {/* Nombre de la empresa */}
        </div>
        {/* Botones de la página principal */}
        <div>
          <button className='main1' onClick={handleSubmit} type="submit">Muro</button> {/* Botón para el muro */}
        </div>
        <div>
          <button className='main1' onClick={mercadoia} type="submit">Mercado AI</button> {/* Botón para mercado IA */}
        </div>
        <div>
          <button className='main1' type="submit">Cuentas</button> {/* Botón para cuentas */}
        </div>
        <div>
          <button className='main1' type="submit">Ayuda</button> {/* Botón para ayuda */}
        </div>
        <div>
          <button className='main1' type="submit">Salir</button> {/* Botón para salir */}
        </div>
        <div>
          <h2 style={{fontSize:'20px', marginLeft:'3rem'}}><span className="iconata"></span>Atawall</h2> {/* Logo de la empresa */}
        </div>
      </div>
    </div>
  );
};

export default MainPage; // Exporta el componente MainPage
