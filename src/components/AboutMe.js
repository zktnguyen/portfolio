import React from 'react';
import Skills from './Skills';

const titleFont = "Indie Flower";
const AboutMe = () => (
  <div className='about animated fadeInLeft'>
    <p className='text-center'>
      UCDavis CS 2016 - Web Developer - JavaScript enthusiast - Badminton - Exercising - 
      Music Lover - Concert Goer - Dogs and Cats - Traveling - SF East Bay Area Native - <br/>Yelp Elite 2017 -
      Milk Tea - Food Lover - Black Coffee
    
    </p>
    <br/>
    <div className='text-center'>
      <h2 style={{fontFamily: titleFont }}>Developer Toolbox</h2>
      <Skills />
    </div>
    
  </div>
);

export default AboutMe;