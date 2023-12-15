import React, { Component } from 'react';
import './Formulario.css';
import { useNavigate } from 'react-router-dom';

//const navigate = useNavigate();
class Formulario extends Component {
 constructor(props) {
    super(props);
    this.state = {
      pais: '',
      nombreLegal: '',
      rubro: false,
      tel: '',
      responsableAlta: '',
      apellidoYNombre: '',
      mail: '',
    };
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
 }

 handleSubmit(event) {
    alert('Datos enviados: ' + JSON.stringify(this.state));
    event.preventDefault();
    navigate('/register3');
 }

 render() {
  return (
    <div>
        <h1 className="titulo-global">atawall</h1>
    <div className="cuenta-empresa">
      <h1 className="tituloform">Complete el siguiente formulario</h1>
      <div className="formm">
        <form onSubmit={this.handleSubmit}>
          <label>
            
            <select name="pais" onChange={this.handleChange}>
              <option value="">Selecciona un país</option>
              <option value="pais1">País 1</option>
              <option value="pais2">País 2</option>
            </select>
          </label>
          <label>
            <input type="text" name="nombreLegal" placeholder="Nombre Legal" onChange={this.handleChange} />
          </label>
          <label>
            
            <select name="rubro" onChange={this.handleChange}>
              <option value="">Selecciona un rubro</option>
              <option value="rubro1">Rubro 1</option>
              <option value="rubro2">Rubro 2</option>
            </select>
          </label>
          <label>
            <input type="text" name="tel" placeholder="Tel." onChange={this.handleChange} />
          </label>
          <label>
            <input type="text" name="responsableAlta" placeholder="Responsable de alta" onChange={this.handleChange} />
          </label>
          <label>
            <input type="text" name="apellidoYNombre" placeholder="Apellido y nombre" onChange={this.handleChange} />
          </label>
          <label>
            <input type="text" name="mail" placeholder="Mail" onChange={this.handleChange} />
          </label>
          <button className="btncontinue" type="submit">Continuar</button>
          <div style={{ marginLeft:'2rem', marginBottom:'2rem' }} className="otros-botones">
          <button className="otro-boton" style={{ backgroundColor: "#1b1b1b" }}></button>
          <button className="otro-boton" style={{ backgroundColor: "#05c988" }}></button>
          <button className="otro-boton" style={{ backgroundColor: "#1b1b1b" }}></button>
        </div>
        </form>
        
      </div>
    </div>
    </div>
  );
}
}

export default Formulario;