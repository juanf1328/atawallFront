// Importaciones de React, useState y styled-components
import { useState } from 'react';
import styled from 'styled-components';

// Importaciones de componentes y estilos
import Navbar from './navbar';
import Card from './Card';
import CardBlack from './CardBlack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import './mercadoAI.css';

// Contenedor principal de la página
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

// Contenedor de los botones de acción
const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

// Botón estilo switch
const SwitchButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 500;
  ring-offset-color: transparent;
  transition-property: background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  height: 2.5rem;
  background-color: ${(props) => props.active ? '#14dbad' : '#1b1b1b'};
  color: white;
  border-radius: 0.5rem;
  padding: 0.25rem 1rem;
  margin-right: 0.5rem;

  &:hover {
    background-color: #14dbad;
  }
`;

// Contenedor de filtros
const Filters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// Elemento de filtro
const FilterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// Dropdown de filtro
const Dropdown = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.5rem;
  width: 150px;
  border-radius: 0.5rem;
  border: 1px solid #1b1b1b;
  background-color: #1b1b1b;
  color: white;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  transition-property: border-color, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:focus {
    outline: none;
    border-color: #14dbad;
    box-shadow: 0 0 0 2px #14dbad;
  }
`;

// Input de filtro
const Input = styled.input`
  height: 2rem;
  width: 126px;
  border-radius: 0.5rem;
  border: none;
  background-color: #1b1b1b;
  color: white;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  transition-property: border-color, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:focus {
    outline: none;
    border-color: #14dbad;
    box-shadow: 0 0 0 2px #14dbad;
  }
`;

// Contenedor de búsqueda de vendedor
const VendorSearchContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Contenedor del logo
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
  margin-top: 1.5rem;
  font-size: 18px;
  font-weight: bold;
`;

// Título del logo
const LogoTitle = styled.h2`
  margin-left: 0.5rem;
  font-size: 16px;
`;

// Componente de búsqueda de vendedor
const VendorSearch = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [location, setLocation] = useState('');
  const [proAccounts, setProAccounts] = useState(false);
  const [ai, setAi] = useState(false);
  const [sellMode, setSellMode] = useState('sell');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implementar la lógica de búsqueda
  };

  const handleSellModeChange = (mode) => {
    setSellMode(mode);
  };

  return (
    <VendorSearchContainer>
      <ActionButtons>
        {/* Botones de modo de venta */}
        <SwitchButton active={sellMode === 'sell'} onClick={() => handleSellModeChange('sell')}>
          Vender
        </SwitchButton>
        <SwitchButton active={sellMode === 'ai'} onClick={() => handleSellModeChange('ai')}>
          Vender con IA
        </SwitchButton>
      </ActionButtons>
      <p className="text-xs mb-4">Los filtros harán tu búsqueda más sencilla.</p>
      {/* Filtros */}
      <Filters>
        <FilterItem>
          <FormGroup>
            {/* Switch para filtrar por producto */}
            <FormControlLabel
              control={<Switch checked={product} onChange={() => setProduct((prev) => !prev)} />}
            />
          </FormGroup>
          {/* Dropdown para seleccionar el producto */}
          <Dropdown>Producto</Dropdown>
        </FilterItem>
        <FilterItem>
          <FormGroup>
            {/* Switch para filtrar por cantidad */}
            <FormControlLabel
              control={<Switch checked={quantity} onChange={() => setQuantity((prev) => !prev)} />}
            />
          </FormGroup>
          {/* Input para ingresar la cantidad */}
          <Input placeholder="Cantidad" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </FilterItem>
        {/* Otros filtros similares */}
      </Filters>
      {/* Contenedor del logo */}
      <LogoContainer>
        <span className="iconata"></span>
        <LogoTitle>Atawall</LogoTitle>
      </LogoContainer>
    </VendorSearchContainer>
  );
};

// Contenedor de contenido de la página
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 5rem 1rem 1rem;

  @media (max-width: 768px) {
    padding: 3.5rem 1rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1rem 1rem;
  }
`;

// Contenedor de título
const TitleContainer = styled.div`
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 2rem;
  }
`;

// Página MercadoAiPage
const MercadoAiPage = () => {
  return (
    <PageContainer>
      {/* Barra de navegación */}
      <Navbar />
      {/* Contenido de la página */}
      <ContentContainer>
        <TitleContainer>
          <h3 className="titlemercado">¿Qué desea hacer?</h3> {/* Título de la sección */}
        </TitleContainer>
        <div className="cards">
          <Card color="yellow" title="Compra" /> {/* Tarjeta de compra */}
          <Card color="green" title="Venta" /> {/* Tarjeta de venta */}
        </div>
        <div style={{ marginTop: '20px' }}>
          <CardBlack> {/* Tarjeta negra */}
            <VendorSearch /> {/* Componente de búsqueda de vendedor */}
          </CardBlack>
        </div>
      </ContentContainer>
    </PageContainer>
  );
};

export default MercadoAiPage; // Exporta el componente MercadoAiPage
