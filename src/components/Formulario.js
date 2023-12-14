import React, { Component } from 'react';
import './Formulario.css';

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
 }

 render() {
    return (
      <div className="cuenta-empresa">
        <h1>Complete el siguiente formulario</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pais:
            <input type="text" name="pais" onChange={this.handleChange} />
          </label>
          <label>
            Nombre Legal:
            <input type="text" name="nombreLegal" onChange={this.handleChange} />
          </label>
          <label>
            Rubro:
            <input type="checkbox" name="rubro" onChange={this.handleChange} />
          </label>
          <label>
            Tel.:
            <input type="text" name="tel" onChange={this.handleChange} />
          </label>
          <label>
            Responsable de alta:
            <input type="text" name="responsableAlta" onChange={this.handleChange} />
          </label>
          <label>
            Apellido y nombre:
            <input type="text" name="apellidoYNombre" onChange={this.handleChange} />
          </label>
          <label>
            Mail:
            <input type="text" name="mail" onChange={this.handleChange} />
          </label>
          <button type="submit">Continuar</button>
        </form>
      </div>
    );
 }
}

export default Formulario;