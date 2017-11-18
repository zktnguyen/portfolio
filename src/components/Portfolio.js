import React from 'react';
import Card from './Card';
import Skills from './Skills';

const Portfolio = () => (
  <div className='text-center'>
    <div className='portfolio animated fadeInRight'>
      <Skills />
      <Card title='COISAS' 
            subtitle='React.JS, jsx-hyperscript, CSS'
            link='https://coisas.alhur.es/' />
      <Card title='SHOPSPLASH' 
            subtitle='ReactJS, Redux, Express, MongoDB, Node.JS'
            link='https://shop-splash.herokuapp.com' />
      <Card title='REACT-REDUX TMDB' 
            subtitle='React.JS, Redux, Bootstrap, HTML, CSS'
            link='https://zktnguyen.github.io/redux-tmdb/' />
      <Card title='WEATHER LIST' 
            subtitle='ReactJS, Redux, Bootstrap, HTML, CSS'
            link='https://zktnguyen.github.io/weather/' />
      <Card title='MINESWEEPER' 
            subtitle='JavaScript, jQuery, Semantic-UI, HTML, CSS'
            link='https://zktnguyen.github.io/js-minesweeper/' />
      <Card title='JS CALCULATOR' 
            subtitle='JavaScript, jQuery, Bootstrap, HTML, CSS'
            link='https://zktnguyen.github.io/jquery-calculator/' />
      
    </div>
  </div>
);

export default Portfolio;