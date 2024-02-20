import React from 'react';
import './CompanyRegister2.css';
import { useNavigate } from 'react-router-dom';


const CompanyRegister2 = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:');

    
    navigate('/finish');
  };


// const CompanyRegister2 = () => {
  return (
    <form onSubmit={handleSubmit}>
    <div className="CompanyRegister2">
        <h2 className="form-title" style={{fontSize:'20px', color: '#14dbad', }}>Cuenta Empresa</h2>
      <p className="form-subtitle2"style={{fontSize:'15px', marginRight:'20rem'}}>Verificacion de datos <span className="iconEmp2"></span></p>
      <div className='contains'>
      <p className="subtitle2">Nuestro equipo se pondrá en contacto con usted en la brevedad, sus datos estan siendo procesados</p>
     <div className='btnss'>
      <div className="row">
        <button style={{marginLeft:'8.5rem'}} className="circular-button">1</button>
        <span className="text" style={{fontSize:'0.8rem', marginRight:'2rem'}}>Recibirá un mail confirmando el registro</span>
      </div>

      <div className="row">
        <span className="text" style={{fontSize:'0.8rem', marginRight:'2rem'}}>Se habilitará y otorgará el acceso completo a mercadoenergia</span>
        <button className="circular-button">2</button>
      </div>

      <div className="row">
        <span className="text" style={{fontSize:'0.8rem', marginRight:'2rem'}}>Su cuenta será dada de alta para comenzar a operar</span>
        <button style={{marginLeft:'2.5rem'}} className="circular-button">3</button>
      </div>
      </div>
      <div>
      <button onClick={handleSubmit} className='finalizar' type="submit">Finalizar</button>
      </div>
      <div style={{marginLeft:'6.5rem'}} className="otros-botones">
          <button disabled className="otro-boton" style={{ backgroundColor: "#1b1b1b" }}></button>
          <button disabled className="otro-boton" style={{ backgroundColor: "#1b1b1b" }}></button>
          <button disabled className="otro-boton" style={{ backgroundColor: "#14dbad" }}></button>
        </div>
    </div>
    </div>
    </form>
  );
};


export default CompanyRegister2;
