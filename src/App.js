//REACT IMPORTS
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";


//COMPONENTS
import Login from './components/Login';
import MainPage from './components/MainPage';
import Register from './components/Register'; 
import Formulario from './components/Formulario'; 
import CompanyRegister2 from './components/CompanyRegister2'; 
import FinishRegister from './components/FinishRegister'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/CompanyRegister1" element={<Formulario />} />
        <Route path="/CompanyRegister2" element={<CompanyRegister2 />} />
        <Route path="/finish" element={<FinishRegister />} />
      </Routes>
    </Router>
  );
};

export default App;
