import React from 'react'

export const DotIndicator = ({ sections, currentSection, onDotClick}) => {
  return (
    <div className="dot-indicator">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`dot ${currentSection === index ? 'active' : ''}`}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  )
}
