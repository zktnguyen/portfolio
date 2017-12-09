import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <div className="container">
      <Header />
    </div>
    <div className="container-fluid">
      <div className="row ">
        <div className="col-md-3">
          <h1 className="text-center" style={{paddingLeft: '50px'}}>About Me</h1>
          <AboutMe />
        </div>
        <div className="col-md-7">
          <h1 className="text-center">Portfolio</h1>
          <Portfolio />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
