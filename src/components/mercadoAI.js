import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #333;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 200px;
  color: white;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
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
  background-color: ${(props) => props.primary ? '#4CAF50' : '#555'};
  color: white;
  border-radius: 0.5rem;
  padding: 0.25rem 1rem;

  &:hover {
    background-color: rgba(76, 175, 80, 0.9);
  }
`;

const Filters = styled.div`
  display: space-y-3;
`;

const FilterItem = styled.div`
  display: flex;
  align-items: center;
`;

const Switch = styled.button`
  display: inline-flex;
  height: 24px;
  width: 44px;
  align-items: center;
  border-radius: 9999px;
  border: 2px solid transparent;
  transition-property: background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  cursor: pointer;
  background-color: ${(props) => props.checked ? '#4CAF50' : '#555'};

  &::after {
    content: "";
    display: block;
    height: 20px;
    width: 20px;
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
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid #555;
  background-color: #555;
  color: white;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  transition-property: border-color, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:focus {
    outline: none;
    border-color: #4CAF50;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.5);
  }
`;

const Input = styled.input`
  height: 2.5rem;
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  background-color: #555;
  color: white;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  transition-property: border-color, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:focus {
    outline: none;
    border-color: #4CAF50;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.5);
  }
`;

const VendorSearch = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [location, setLocation] = useState('');
  const [proAccounts, setProAccounts] = useState(false);
  const [ai, setAi] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement filtering logic here based on the state values
  };

  return (
    <Container>
      <ActionButtons>
        <Button primary>Vender</Button>
        <Button>Vender con IA</Button>
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
    </Container>
  );
};

export default VendorSearch;