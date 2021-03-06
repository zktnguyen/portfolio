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
    <div className='col-sm-8'>
      <div className='row my-name text-center'>
          <h1>KIM NGUYEN</h1>
          <h6 className='text-muted'>SOFTWARE DEVELOPER, PET, FOOD & MILK TEA ENTHUSIAST</h6>
      </div>
      <Contact />
    </div>
    <div className='col-sm-1'/>
  </div>
);

export default Header;