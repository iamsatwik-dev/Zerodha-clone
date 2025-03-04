import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from './landing_Page/home/HomePage';
import Signup from "./landing_Page/signup/Signup";
import AboutPage from './landing_Page/about/AboutPage';
import ProductPage from "./landing_Page/product/ProductPage"
import PricingPage from './landing_Page/pricing/PricingPage';
import SupportPage from "./landing_Page/support/SupportPage";
import Navbar from "./landing_Page/Navbar";
import Footer from "./landing_Page/Footer";
import NotFound from './landing_Page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
  
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/about' element={<AboutPage/>}></Route>
    <Route path='/product' element={<ProductPage/>}></Route>
    <Route path='/pricing' element={<PricingPage/>}></Route>
    <Route path='/support' element={<SupportPage/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>
    
  </Routes>
  <Footer/>
  </BrowserRouter>
);


