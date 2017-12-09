import React from 'react';
import Card from './Card';

const Portfolio = () => (
  <div className='text-center'>
    <div className='portfolio animated fadeInRight'>
      
      <Card title='COISAS' 
            subtitle='ReactJS, jsx-hyperscript, CSS'
            link='https://coisas.alhur.es/' />
      <Card title='MR.DAO LANDSCAPING' 
            subtitle='ReactJS, Redux, Material-UI, Bootstrap, SCSS'
            link='https://zktnguyen.github.io/mrdao-landscaping/' />      
      <Card title='SHOPSPLASH' 
            subtitle='ReactJS, Redux, Express, MongoDB, Node.JS'
            link='https://shop-splash.herokuapp.com' />
      <Card title='REACT-REDUX TMDB' 
            subtitle='ReactJS, Redux, Bootstrap, HTML, CSS'
            link='https://zktnguyen.github.io/redux-tmdb/' />
      
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