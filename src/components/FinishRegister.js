import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FinishRegister.css';


const FinishRegister = () => {
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      navigate('/main');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className='modalFinish'>
        <h1>Felicitaciones <br />&#10004;</h1>
            <p>Su empresa ya se encuentra registrada, sube una imagen de perfil (Logotipo) que le permita identificarte rapidamente en nuestra plataforma.</p>
            <button onClick={handleSubmit} className='finalizar' type="submit">Mas tarde</button>
        </div>
      </form>
    );
  };
  
  
  export default FinishRegister;