// src/App.js
import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import Footer from './Footer/Footer';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => (
  <div className="App">
    <Header />
    <Hero />
    <Features />
    
    <Footer />
  </div>
);

export default App;
