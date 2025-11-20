import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Category from './pages/Category';
import MenuItem from './pages/MenuItem';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        {/* Layout común para todas las páginas */}
        <Route path="/" element={<Layout />}>
          {/* Ruta por defecto redirige a /seafood */}
          <Route index element={<Navigate to="/seafood" />} />
          {/* Rutas por categoría */}
          <Route path=":category" element={<Category />} />
          {/* Ruta de detalle de plato */}
          <Route path=":category/:id" element={<MenuItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
