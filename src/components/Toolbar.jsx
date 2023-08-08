import React from 'react';
import '../App.css';

const Toolbar = ({ filters, selected, onSelectFilter }) => {
    return (
      <div className='filters'>
        {filters.map((filter, index) => (
          <div
            key={index}
            className={filter === selected ? "filtre selected" : "filtre"}
            onClick={() => onSelectFilter(filter)}
          >
            {filter}
          </div>
        ))}
      </div>
    );
  };
  

export default Toolbar;