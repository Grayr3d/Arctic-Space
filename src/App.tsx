import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Models } from './pages/Models';
import { Product } from './pages/Product';
import { Process } from './pages/Process';
import { Assistant } from './pages/Assistant';
import { About } from './pages/About';
import { Sustainability } from './pages/Sustainability';
import { Configurator } from './pages/Configurator';
import { Layout } from './components/Layout';
import { AdminPanel } from './pages/AdminPanel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/process" element={<Process />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/about" element={<About />} />
          <Route path="/quality" element={<Sustainability />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Route>
        <Route path="/configure/:id" element={<Configurator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;