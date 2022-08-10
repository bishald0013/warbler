import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Components/Pages/Product';
import AboutUs from './Components/Pages/AboutUs';
import Navbar  from './Components/Navbar';
import Context from './Context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Context>
      <BrowserRouter>
       <Navbar />
        <Routes>
             <Route path="/" element={<App />} />
             <Route path="Product" element={<Product />} />
             <Route path="AboutUs" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
      </Context>
  );

