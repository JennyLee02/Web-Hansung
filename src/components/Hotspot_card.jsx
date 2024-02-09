import React from 'react';
import './hotspot_card.css';


export const Hotspot_card = ({title, image, description, onBackClick}) => {
  return (

    <div style={styles.cardContainer}>
      <div className="back-button" style={styles.backButton} onClick={onBackClick}>
        ← back
      </div>
      <div style={{ ...styles.imageContainer, backgroundImage: `url(${image})`}}>
        {/* Image content goes here, if any */}
      </div>
      <div style={styles.textContainer}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.text}>{description}</p>
      </div>
    </div>
    );
  };

  // Styles
  const styles = {
    cardContainer: {
      position: 'absolute',
      width: '300px',
      borderRadius: '25px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      zIndex: 10,
    },
    backButton: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      zIndex: 2,
      padding: '5px 10px',
      borderRadius: '15px',
      cursor: 'pointer',
    },
    imageContainer: {
      height: '150px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    textContainer: {
      backgroundColor: '#ffffff',
      padding: '20px',
      textAlign: 'left',
    },
    title: {
      fontWeight: 'bold',
      fontSize: '18px',
      margin: '0 0 10px 0',
    },
    text: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '1.5',
      margin: 0,
    },
  };


