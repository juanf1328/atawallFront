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
      <h1>Finishhhhh</h1>
      <button onClick={handleSubmit} className='finalizar' type="submit">Entendido</button>
      </form>
    );
  };
  
  
  export default FinishRegister;