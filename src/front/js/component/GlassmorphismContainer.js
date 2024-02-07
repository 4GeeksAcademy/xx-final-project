import React from 'react';
import '../../styles/glassmorphism.css';

const GlassmorphismContainer = ({ children }) => {
  return (
    <div className="glass-container">
      {children}
    </div>
  );
};

export default GlassmorphismContainer;
