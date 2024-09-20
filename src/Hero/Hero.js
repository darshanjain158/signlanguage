// src/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => (
  <section id='hero'>
  <div className="hero">
    <div className='hero-content'>
    <h1> <b>Introducing Sign Sync </b></h1>
    <p>Our project focuses on developing a real-time Indian Sign Language (ISL)<br /> to text
and speech translator using advanced computer <br />vision and deep learning
techniques.</p>
    <button className="cta-button">Get Started</button>
  </div>
  </div>
  </section>
);

export default Hero;

