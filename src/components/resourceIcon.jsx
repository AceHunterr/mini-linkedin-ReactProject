import React from 'react';
import myImg from "../static/images/doc.svg";

const ResourceIcon = ({ file, onClick }) => {
  return (
    <div className="file-icon" onClick={() => onClick(file)}>
      <img src={myImg} alt="PDF Icon" className="file-icon-img" />
      <div className="file-name">{file.name}</div>
    </div>
  );
};

export default ResourceIcon;
