import React from 'react';

const Contact = () => (
  <div className='Contact row'>
    <div className='col-md-2'>
      <a className='btn btn-info links' rel='noopener noreferrer' target='_blank' href='https://medium.com/@kimtnguyen'>
      <i className="fa fa-pencil" aria-hidden="true"/> My Blog</a>
    </div>
    <div className='col-md-2'>
      <a className='btn btn-info links' rel='noopener noreferrer' target='_blank' href='mailto:kimtnguyen4@gmail.com'>
        <i className="fa fa-envelope" aria-hidden="true"/> Email</a>
    </div>
    <div className='col-md-2'>
      <a className='btn btn-info links' rel='noopener noreferrer' target='_blank' href='https://github.com/zktnguyen'>
      <i className="fa fa-github" aria-hidden="true"/> GitHub</a>
    </div>
    <div className='col-md-2'>
      <a className='btn btn-info links' rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/in/kim-nguyen-786b81a4/'>
      <i className="fa fa-linkedin" aria-hidden="true"/> LinkedIn</a>
    </div>
  </div>
);

export default Contact;