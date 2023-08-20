import React from 'react';

function Description({ text }) {
  return (
    <div>
      <h3>Descripción del producto:</h3>
      <p>{text}</p>
    </div>
  );
}

export default Description;
