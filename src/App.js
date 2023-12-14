//REACT IMPORTS
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//COMPONENTS
import Loginn from './components/Login';
import MainPage from './components/MainPage';
import Register from './components/Register'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginn />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
