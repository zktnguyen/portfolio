import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App = () => (
  <div className='App'>
    <div className='container'>
      <Header/>
      <div className='row'>
        <div className='col-md-3'>
          <h5 className='titles text-center'>ABOUT ME</h5>
          <AboutMe/>
        </div>
        <div className='col-md-9'>
          <h5 className='titles text-center'>PORTFOLIO & SKILLS</h5>
          <Portfolio/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  
);


export default App;
