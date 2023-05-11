import React, { useState } from "react";
import "./styles.css";
import uploadLogo from "./upload.png";

const App = () => {
  const [photos, setPhotos] = useState([]);

  const handleUpload = (event) => {
    const files = event.target.files;
    const newPhotos = [...photos];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (event) => {
        newPhotos.push(event.target.result);
        setPhotos(newPhotos);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src={uploadLogo} alt="Upload Logo" className="logo" />
        <h2 className="heading">Upload your photos here</h2>
      </div>
      <div className="upload-container">
        <input type="file" multiple onChange={handleUpload} />
      </div>
      <div className="photos-container">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt="uploaded" className="photo" />
        ))}
      </div>
    </div>
  );
};

export default App;
