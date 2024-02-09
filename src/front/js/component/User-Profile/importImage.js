import React, { useState } from "react";
import "../../../styles/user-profile/importImage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUpload
} from '@fortawesome/free-solid-svg-icons';
import { Button, Form } from "react-bootstrap";

export const ImportImage = () => {
  const [uploadImage, setUploadImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="box">
      <Button className="uploadBtn">
        <label htmlFor="input-file">
          Upload Image
          <input type="file" accept="image/jpeg, image/png, image/jpg" id="input-file" onChange={handleImageChange} />
        </label>
      </Button>
      <FontAwesomeIcon className='upload' style={{ position: 'absolute' }}
        icon={faUpload}
      />
        {uploadImage && <img src={uploadImage} alt="Uploaded" />}
    </div>
  );
};
