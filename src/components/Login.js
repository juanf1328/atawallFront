import React, { useState } from 'react';
import { Button, Input, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
  const [language, setLanguage] = useState('english');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {
    // Si los campos de inicio de sesión están siendo mostrados, ejecuta el evento handleSubmit
    if (showLoginForm) {
      handleSubmit();
    } else {
      // De lo contrario, muestra los campos de inicio de sesión
      setShowLoginForm(true);
    }
  };

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

      // Si el inicio de sesión es exitoso, almacena el token o los datos del usuario según sea necesario.

      // Redirige al usuario a la página principal
      navigate('/main');

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleRegisterClick = () => {
    // Redirige al usuario a la página de registro
    navigate('/register');
  };

  return (
    <div className="login-container">
      {/* <span className="icon"></span> */}
      <h1 style={{ fontSize:'2rem' }} > <span className="icon"></span>{language === 'english' ? 'Atawall' : 'Atawall'}</h1>
      <h2 style={{ fontSize:'1rem' }} className="subtitle">{language === 'english' ? 'Welcome' : 'Bienvenido'}</h2>
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
                  background:'#fff',
                  color:'#000'
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
                  background:'#fff',
                  color:'#000'
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
            <Button onClick={handleLoginClick} style={{ borderRadius:'17px' , width: '15rem', color: '#000', background: '#14dbad', borderColor: '#14dbad' }}>
              {showLoginForm ? 'Iniciar Sesión' : 'Login'}
            </Button>
          </div>
          <div className="button-container">
            <Button onClick={handleRegisterClick} style={{ borderRadius:'17px' , width: '15rem', marginTop: '10px', background: '#1b1b1b', color: '#fff', borderColor: '#fff' }}>{language === 'english' ? 'Register' : 'Registrarme'}</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <p style={{ marginTop:'4rem' ,color: '#14dbad', textDecoration: 'underline', textDecorationColor: '#14dbad', width: '7rem', cursor: 'pointer', marginLeft: '2.3rem' }}>{language === 'english' ? 'Need Help?' : 'Necesitas ayuda?'}</p>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <div className="language-container">
            <Button style={{ color: '#7c7c7c', background: '#212121', borderColor: '#1b1b1b' }} onClick={() => changeLanguage('spanish')} className="language-button">ESP</Button>
            <div className="language-divider" />
            <Button style={{ color: '#7c7c7c', background: '#212121', borderColor: '#1b1b1b' }} onClick={() => changeLanguage('english')} className="language-button">ENG</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
