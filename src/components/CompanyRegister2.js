import React from 'react';
import './CompanyRegister2.css';

const CompanyRegister2 = () => {
  return (
    <div className="CompanyRegister2">
        <h2 className="form-title" style={{fontSize:'20px', color: '#05c988', }}>Cuenta Empresa</h2>
      <p className="form-subtitle"style={{fontSize:'15px'}}>Verificacion de datos</p>
      <div className='contains'>
      <p className="subtitle2">Nuestro equipo se pondrá en contacto con usted en la brevedad, sus datos estan siendo procesados</p>
     <div className='btnss'>
      <div className="row">
        <button className="circular-button">1</button>
        <span className="text" style={{fontSize:'0.8rem'}}>Recibirá un mail confirmando el registro</span>
      </div>

      <div className="row">
        <span className="text" style={{fontSize:'0.8rem', marginRight:'2rem'}}>Se habilitará y otorgará el acceso completo a mercadoenergia</span>
        <button className="circular-button">2</button>
      </div>

      <div className="row">
        <span className="text" style={{fontSize:'0.8rem', marginRight:'2rem'}}>Su cuenta será dada de alta para comenzar a operar</span>
        <button className="circular-button">3</button>
      </div>
      </div>
      <div>
      <button className='finalizar' type="submit">Finalizar</button>
      </div>
      <div className="otros-botones">
          <button disabled className="otro-boton" style={{ backgroundColor: "#1b1b1b" }}></button>
          <button disabled className="otro-boton" style={{ backgroundColor: "#1b1b1b" }}></button>
          <button disabled className="otro-boton" style={{ backgroundColor: "#05c988" }}></button>
        </div>
    </div>
    </div>
  );
};

export default CompanyRegister2;
