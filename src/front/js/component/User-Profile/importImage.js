import React, { useState } from "react";
import "../../../styles/user-profile/importImage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUpload
} from '@fortawesome/free-solid-svg-icons';
import { Form } from "react-bootstrap";

export const ImportImage = () => {
  const [uploadImage, setUploadImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file){
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const upload = () => {
    console.log("Button was clicked!");
  };

  return (
    <div className="box">
      <Form>
        <Form.Group className="all">
          <Form.Text className="text">
            Upload Photo
          </Form.Text>
        <FontAwesomeIcon className='upload' style={{ position:'absolute' }}
        icon={faUpload}
        onChange={handleImageChange}
        onClick={upload}
        />
        </Form.Group>
      </Form>
    </div>
  );
};