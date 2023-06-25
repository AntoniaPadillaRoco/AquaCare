import React from 'react';
import Landing from './pages/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsID from './pages/ProductsID'
import User from './pages/User';
import LayoutUser from './layouts/LayoutUser';
import Consejos from './pages/Consejos';
import Works from './components/Works';
import Graficos from './pages/Graficos';
import Ayuda from './pages/Ayuda';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Landing/>} />
        <Route path = "/ProductsID" element = {<ProductsID/>} />
      

        <Route path="/user" element={<LayoutUser />}>
          <Route index element={<User />} />
          <Route path="graficos" element={<Graficos />} />
          <Route path="consejos" element={<Consejos />} />
          <Route path="ayuda" element={<Ayuda />} />

        </Route>


      </Routes>
    </BrowserRouter>
  )
};

export default App
