import React from 'react';
import './widget.css'; // Optional: For styling

const Widget = ({ label, value }) => {
  return (
    <div className="widget-input">
      <label className="widget-label">{label}</label>
      <input
        className="widget-field"
        type="text"
        value={value}
      />
    </div>
  );
};

export default Widget;
