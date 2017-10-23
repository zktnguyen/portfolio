import React from 'react';
import Contact from './Contact';
import './component.css';

const Header = () => (
  <div className='row Header animated fadeInDown'>
    <div className='col-sm-3'>
      <img className='img-responsive my-pic' 
        src='http://res.cloudinary.com/ddhp5wtg8/image/upload/r_16/v1508730041/IMG_7726_2_c9cdmy.jpg'
        alt='me'
      />
    </div>
    <div className='col-sm-9'>
      <div className='my-name'>
        <h1>KIM NGUYEN</h1>
      </div>
      <Contact />
    </div>
  </div>
);

export default Header;