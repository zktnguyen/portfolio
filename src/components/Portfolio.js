import React from 'react';
import Card from './Card';

const Portfolio = () => (
  <div className='text-center'>
    <div className='portfolio animated fadeInRight'>
      <Card title='COISAS' 
            subtitle='React.JS, jsx-hyperscript, CSS'
            link='https://coisas.alhur.es/' />
      <Card title='REACT-REDUX TMDB' 
            subtitle='React.JS, Redux, Bootstrap, HTML, CSS'
            link='https://zktnguyen.github.io/redux-tmdb/' />
      <Card title='TWITCH.TV STREAM LIST' 
            subtitle='JavaScript, jQuery, Bootstrap, HTML, CSS'
            link='https://zktnguyen.github.io/TwitchTV-stream-list/' />
      <Card title='MINESWEEPER' 
            subtitle='JavaScript, jQuery, Semantic-UI, HTML, CSS'
            link='https://zktnguyen.github.io/js-minesweeper/' />
      <Card title='JavaScript Calculator' 
            subtitle='JavaScript, jQuery, Bootstrap, HTML, CSS'
            link='https://zktnguyen.github.io/jquery-calculator/' />
      <Card title='TicTacToe' 
            subtitle='JavaScript, jQuery, Bootstrap, HTML, CSS'
            link='https://zktnguyen.github.io/js_tictactoe/' />
    </div>
  </div>
);

export default Portfolio;