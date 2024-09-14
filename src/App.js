// src/App.js
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';
import './styles.css';


const App = () => (
  <div className="App">
    <Header />
    <Hero />
    <Features />
    
    <Footer />
  </div>
);

export default App;
