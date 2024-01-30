import React from 'react';
import PropTypes from 'prop-types';
import './dotIndicator.css'; 

const DotIndicator = ({ isActive, onClick }) => {
  return (
    <button 
      className={`dot-indicator ${isActive ? 'active' : ''}`}
      onClick={onClick}
    />
  );
};

DotIndicator.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default DotIndicator;
