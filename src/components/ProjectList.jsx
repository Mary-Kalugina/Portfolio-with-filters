import React from 'react';
import '../App.css';
import Column from './Column';

const ProjectList = ({projects}) => {
    const column1Images = projects.filter((_, index) => index % 3 === 0);
    const column2Images = projects.filter((_, index) => index % 3 === 1);
    const column3Images = projects.filter((_, index) => index % 3 === 2);
    console.log(column1Images)

  return (
    <div className="layout">
      <Column images={column1Images} />
      <Column images={column2Images} />
      <Column images={column3Images} />
    </div>
  );
  }

export default ProjectList;
