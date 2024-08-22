import React from 'react';
import '../App.css';

const FileUploadPopup = ({ progress }) => {
  return (
    <div className={`popup-container ${progress < 100 ? 'show' : ''}`}>
      <h2>Uploading Files</h2>
      <div className="progress-bar">
        <div className="progress-bar-inner" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="progress-percentage">{progress}%</div>
    </div>
  );
};

export default FileUploadPopup;
