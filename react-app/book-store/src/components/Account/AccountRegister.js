import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', image);

    axios.post('/images/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  };

  return (
    <div>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag and drop an image here, or click to select a file</p>
          </div>
        )}
      </Dropzone>
      {image && <img src={image} alt="Uploaded image" />}
      <button onClick={handleUpload}>Upload image</button>
    </div>
  );
}

export default ImageUploader;
