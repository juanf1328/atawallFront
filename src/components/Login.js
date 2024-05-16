// Importaciones de React y librerías
import React, { useState } from 'react';
import { Button, Input, Row, Col } from 'antd'; // Importa componentes de Ant Design
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación
import TermsAndConditions from './TermsAndConditions'; // Importa el componente de Términos y Condiciones
import './Login.css'; // Importa estilos CSS para el componente Login

// Componente Login
const Login = () => {
  // Estados del componente
  const [language, setLanguage] = useState('english'); // Estado para el idioma
  const [showLoginForm, setShowLoginForm] = useState(false); // Estado para mostrar/ocultar el formulario de inicio de sesión
  const [username, setUsername] = useState(''); // Estado para el nombre de usuario
  const [password, setPassword] = useState(''); // Estado para la contraseña
  const navigate = useNavigate(); // Función de navegación

  // Función para cambiar el idioma
  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  // Función para manejar el cambio en el campo de usuario
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Función para manejar el cambio en el campo de contraseña
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Función para manejar el clic en el botón de inicio de sesión
  const handleLoginClick = () => {
    if (showLoginForm) {
      handleSubmit();
    } else {
      setShowLoginForm(true);
    }
  };

  // Función para enviar el formulario de inicio de sesión
  const handleSubmit = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    };

    try {
      const response = await fetch('https://localhost:7082/api/Auth', requestOptions);

      if (!response.ok) {
        throw new Error('Credenciales inválidas');
      }

      const data = await response.json();

      navigate('/main');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Función para manejar el clic en el botón de registro
  const handleRegisterClick = () => {
    navigate('/register');
  };

  // Función para manejar el clic en el enlace de Términos y Condiciones
  const handleTermsAndConditionsClick = () => {
    navigate('/TermsAndConditions');
  };

  // Renderizado del componente
  return (
    <div className="login-container">
      <h1 style={{ fontSize: '2rem' }}>
        <span className="icon"></span>
        {language === 'english' ? 'Atawall' : 'Atawall'}
      </h1>
      <h2 style={{ fontSize: '1rem' }} className="subtitle">
        {language === 'english' ? 'Welcome' : 'Bienvenido'}
      </h2>
      {showLoginForm && (
        <>
          <Row>
            <Col span={8}>
              <Input
                onChange={handleUsernameChange}
                style={{
                  width: '14rem',
                  marginBottom: '1rem',
                  marginLeft: '-0.5rem',
                  height: '2rem',
                  marginTop: '1rem',
                  borderColor: '#1b1b1b',
                  background: '#fff',
                  color: '#000',
                }}
                placeholder={language === 'english' ? 'Email' : 'Correo electrónico'}
              />
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Input
                onChange={handlePasswordChange}
                style={{
                  width: '14rem',
                  marginBottom: '1rem',
                  marginLeft: '-0.5rem',
                  height: '2rem',
                  borderColor: '#1b1b1b',
                  background: '#fff',
                  color: '#000',
                }}
                placeholder={language === 'english' ? 'Password' : 'Contraseña'}
              />
            </Col>
          </Row>
        </>
      )}
      <Row>
        <Col span={8}>
          <div className="button-container">
            <Button
              onClick={handleLoginClick}
              style={{
                borderRadius: '17px',
                width: '15rem',
                color: '#000',
                background: '#14dbad',
                borderColor: '#14dbad',
              }}
            >
              {showLoginForm ? 'Iniciar Sesión' : 'Login'}
            </Button>
          </div>
          <div className="button-container">
            <Button
              onClick={handleRegisterClick}
              style={{
                borderRadius: '17px',
                width: '15rem',
                marginTop: '10px',
                background: '#1b1b1b',
                color: '#fff',
                borderColor: '#fff',
              }}
            >
              {language === 'english' ? 'Register' : 'Registrarme'}
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <p
            style={{
              marginTop: '4rem',
              color: '#14dbad',
              textDecoration: 'underline',
              textDecorationColor: '#14dbad',
              width: '7rem',
              cursor: 'pointer',
              marginLeft: '2.3rem',
            }}
            onClick={handleTermsAndConditionsClick}
          >
            {language === 'english' ? 'Terms & Conditions' : 'Términos y condiciones'}
          </p>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <div className="language-container">
            <Button
              style={{ color: '#7c7c7c', background: '#212121', borderColor: '#1b1b1b' }}
              onClick={() => changeLanguage('spanish')}
              className="language-button"
            >
              ESP
            </Button>
            <div className="language-divider" />
            <Button
              style={{ color: '#7c7c7c', background: '#212121', borderColor: '#1b1b1b' }}
              onClick={() => changeLanguage('english')}
              className="language-button"
            >
              ENG
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login; // Exporta el componente Login
