import React, { useState } from 'react';
import './App.css';

const Test = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    console.log(event);
    setFile(event.target.files[0]);
  };
  console.log(file)

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {file && (
        <div>
          <img src={file} alt="Selected" />
        </div>
      )}
    </div>
  );
};

export default Test;