import React from 'react';
import ResourceIcon from './resourceIcon';

const ResourcesList = ({ files }) => {
  const handleClick = (file) => {
    // Open the file for the user
    window.open(file.url, '_blank');
  };

  return (
    <div className="file-list">
      <div className="icon-container">
        {files.map((file) => (
          <ResourceIcon key={file.id} file={file} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default ResourcesList;
