import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ link, title, subtitle }) => (
  <a href={ link } rel='noopener noreferrer' target='_blank'>
    <div className='card card-styles'>
        <div className='card-body'>
          <h4 className='card-title'>{ title }</h4>
          <p className='card-subtitle muted-text'>{ subtitle }</p>
        </div>
    </div>
  </a>
);

Card.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export default Card;