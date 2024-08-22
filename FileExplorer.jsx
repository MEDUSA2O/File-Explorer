import React, { useState } from 'react';
import '../App.css';
import FileUploadPopup from './FileUploadPopup';

const FileExplorer = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]); // Append new files to the existing list
    setUploading(true);
    simulateUpload();
  };
  

  const simulateUpload = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setUploading(false);
      }
    }, 300);
  };

  const handleDelete = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  return (
    <div className="file-explorer-container">
      <h1>File Explorer</h1>
      <input type="file" multiple onChange={handleFileUpload} />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date Modified</th>
              <th>Size</th>
              <th>Type</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index}>
                <td>{file.name}</td>
                <td>{new Date().toLocaleDateString()}</td>
                <td>{(file.size / 1024).toFixed(2)} KB</td>
                <td>{file.type || 'N/A'}</td>
                <td>
                  <button className="delete-button" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {uploading && (
        <FileUploadPopup progress={progress} />
      )}
    </div>
  );
};

export default FileExplorer;
