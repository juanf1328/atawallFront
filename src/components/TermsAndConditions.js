// Importaciones de React y componentes de Ant Design
import React from 'react';
import { Button, Row, Col } from 'antd'; // Importa componentes de Ant Design
import './TermsAndConditions.css'; // Importa estilos CSS para el componente

// Componente funcional TermsAndConditions que recibe 'language' como prop
const TermsAndConditions = ({ language }) => {
  return (
    <div className="terms-container"> {/* Contenedor principal */}
      <h1 style={{ fontSize: '2rem' }}> {/* Título con tamaño de fuente */}
        <span className="icon"></span> {/* Ícono (a completar según diseño) */}
        {language === 'english' ? 'Terms and Conditions' : 'Términos y condiciones'} {/* Título según idioma */}
      </h1>
      <div className="terms-content"> {/* Contenido de términos y condiciones */}
        <p>
          {language === 'english'
            ? 'By using our platform, you agree to the following terms and conditions:'
            : 'Al usar nuestra plataforma, usted acepta los siguientes términos y condiciones:'}
        </p>
        <ul>
          <li>
            {language === 'english'
              ? 'You must be at least 18 years old to use our platform.'
              : 'Debe tener al menos 18 años de edad para usar nuestra plataforma.'}
          </li>
          <li>
            {language === 'english'
              ? 'You agree to use our platform only for lawful purposes.'
              : 'Usted acepta usar nuestra plataforma solo para fines legales.'}
          </li>
          <li>
            {language === 'english'
              ? 'We reserve the right to modify these terms and conditions at any time.'
              : 'Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento.'}
          </li>
        </ul>
      </div>
      <Row> {/* Fila de diseño */}
        <Col span={8}> {/* Columna de diseño con ancho de 8 */}
          <div className="button-container"> {/* Contenedor del botón */}
            <Button
              style={{
                borderRadius: '17px',
                width: '15rem',
                color: '#000',
                background: '#14dbad',
                borderColor: '#14dbad',
              }}
            >
              {language === 'english' ? 'Accept' : 'Aceptar'} {/* Texto del botón según idioma */}
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TermsAndConditions; // Exporta el componente TermsAndConditions
