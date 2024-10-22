import React from 'react';
import './widget.css'
const Widget = ({ title }) => {
  return (
    <div className="widget">
      <h3>{title}</h3>
      <p>Widget content goes here...</p>
    </div>
  );
};

export default Widget;
