import React from 'react';
import '../App.css';

const Column = ({ images }) => {
  return (
    <div className="column">
      {images.map((obg, index) => (
        <img key={index} src={obg.img} alt={obg.category} />
      ))}
    </div>
  );
};

export default Column;
