import React, { useContext, useEffect, useState } from "react";
import "../../../styles/user-profile/importImage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUpload
} from '@fortawesome/free-solid-svg-icons';
import { Button } from "react-bootstrap";
import { Context } from "../../store/appContext"

export const ImportImage = () => {
  const { store, actions } = useContext(Context)
  const [uploadImage, setUploadImage] = useState(null);


  const handleImageChange = (event) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadImage(e.target.result);
      };
      reader.readAsDataURL(file);
      actions.setPhoto(file);
    }
  };

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined) {

      if (store.photo) {
        setUploadImage(`https://jubilant-orbit-6qr7v7qp4grfrg6p-3001.app.github.dev/api/${store.photo}`)
      } else {
        actions.getPhoto();
      }
    }
  }, [store.token, store.photo])

  return (
    <div className="box">
      <Button className="uploadBtn">
        <label className="upload-label" htmlFor="input-file">
          Upload Image
          <input className="input" type="file" accept="image/jpeg, image/png, image/jpg" id="input-file" onChange={handleImageChange} />
        </label>
      </Button>
      <FontAwesomeIcon className='upload' style={{ position: 'absolute' }}
        icon={faUpload}
      />
      {uploadImage && <img src={uploadImage} alt="Uploaded" />}
    </div>
  );
};
