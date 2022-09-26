import React from 'react';
import './index.css';
import Rodape from './components/rodape/Rodape';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import Cabecalho from './components/cabecalho/Cabecalho';



export default function App() {

  return (
      <>
          
          <Cabecalho />
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
          <Rodape />
      </>
  )
}
