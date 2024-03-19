import React from 'react';
import {Registro} from './components/Registro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {InicioSesion} from './components/InicioSesion';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InicioSesion />} />
        <Route path='/registro' element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


