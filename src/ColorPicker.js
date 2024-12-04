import React, { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState('White');

  const divStyle = {
    backgroundColor: color,
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    textAlign: 'center',
    marginTop: '20px',
    minHeight: '100px'
  };

  return (
    <div className="color-picker" style={divStyle}>
      <p>The color is <strong>{color}</strong></p>
      <button onClick={() => setColor('Aquamarine')}>Aquamarine</button>
      <button onClick={() => setColor('BlueViolet')}>BlueViolet</button>
      <button onClick={() => setColor('Chartreuse')}>Chartreuse</button>
      <button onClick={() => setColor('CornflowerBlue')}>CornflowerBlue</button>
    </div>
  );
}
