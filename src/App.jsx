import React from 'react';
import Landing from './pages/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsID from './pages/ProductsID'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Landing/>} />
        <Route path = "/ProductsID" element = {<ProductsID/>} />
        <Route/>
      </Routes>
    </BrowserRouter>
  )
};

export default App
