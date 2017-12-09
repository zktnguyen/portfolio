import React from 'react';
import Skills from './Skills';

const AboutMe = () => (
  <div className='about animated fadeInLeft text-center'>
    <ul>
      <li>UC DAVIS '16</li>
      <li><a href='https://github.com/zktnguyen/' rel='noopener noreferrer' target='_blank'>
      Code my day away</a></li>
      <li>Badminton player</li>
      <li>Milk tea drinker</li>
      <li>Love dogs & cats</li>
      <li>East Bay Native</li>
      <li><a href='https://www.yelp.com/user_details?userid=qlUgA6JV_MmGnNw7hWXJWA' 
    rel='noopener noreferrer' target='_blank'>Yelp Elite! 2017</a></li>
      <li><a href='https://open.spotify.com/user/iarekim' 
    rel='noopener noreferrer' target='_blank'>Music saves my soul</a><br/></li>
    </ul>
    <br/>
    <div>
      <h2>Primary Skills</h2>
      <Skills />
    </div>
    
  </div>
);

export default AboutMe;