import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './navbar';
import Card from './Card';
import CardBlack from './CardBlack';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 6rem 1rem 1rem;
`;

const VendorSearchContainer = styled.div`
  margin: 1rem;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem; // Aumentamos el margen inferior
`;

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

const Filters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; // Espacio entre los filtros
`;

const FilterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; // Espacio entre el switch y el selector
`;

const Switch = styled.button`
  display: inline-flex;
  height: 24px;
  width: 14px;
  align-items: center;
  border-radius: 9999px;
  border: 2px solid transparent;
  transition-property: background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  cursor: pointer;
  margin-left: 5.5rem;

  background-color: ${(props) => props.checked ? '#14dbad' : '#1b1b1b'};

  &::after {
    content: "";
    display: block;
    height: 20px;
    width: 10px;
    border-radius: 9999px;
    background-color: white;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    transform: translateX(${(props) => props.checked ? '100%' : '0'});
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
`;

const Dropdown = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.5rem;
  width: 150px; // Ancho reducido
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

const Input = styled.input`
  height: 2rem;
  width: 126px; // Ancho reducido
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
    // Implement 
  };

  const handleSellModeChange = (mode) => {
    setSellMode(mode);
  };

  return (
    <VendorSearchContainer>
      <ActionButtons>
        <SwitchButton active={sellMode === 'sell'} onClick={() => handleSellModeChange('sell')}>
          Vender
        </SwitchButton>
        <SwitchButton active={sellMode === 'ai'} onClick={() => handleSellModeChange('ai')}>
          Vender con IA
        </SwitchButton>
      </ActionButtons>
      <p className="text-xs mb-4">los filtros harán tu búsqueda más sencilla.</p>
      <Filters>
        <FilterItem>
          <Switch checked={product} onClick={() => setProduct((prev) => !prev)} />
          <Dropdown>Producto</Dropdown>
        </FilterItem>
        <FilterItem>
          <Switch checked={quantity} onClick={() => setQuantity((prev) => !prev)} />
          <Input placeholder="Cantidad" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </FilterItem>
        <FilterItem>
          <Switch checked={priceRange} onClick={() => setPriceRange((prev) => !prev)} />
          <Dropdown>Rango de precio</Dropdown>
        </FilterItem>
        <FilterItem>
          <Switch checked={location} onClick={() => setLocation((prev) => !prev)} />
          <Dropdown>Ubicación</Dropdown>
        </FilterItem>
      </Filters>
    </VendorSearchContainer>
  );
};

const MercadoAiPage = () => {
  return (
    <PageContainer>
      <Navbar />
      <ContentContainer>
        <div className="cards">
          <Card color="yellow" title="Compra" />
          <Card color="green" title="Venta" />
        </div>
        <div style={{ marginTop: '20px' }}>
          <CardBlack>
            <VendorSearch />
          </CardBlack>
        </div>
      </ContentContainer>
    </PageContainer>
  );
};

export default MercadoAiPage;