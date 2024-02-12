import React, { useContext } from 'react';
import Image from 'react-bootstrap/Image';
import { Context } from "../../store/appContext";


function ParkProfileImage({data}) {
  const {store, actions} = useContext(Context)
  return (
    <>
      <div className="image-container">
        <Image
          className="parkImage"
        />
      </div>
    </>
  );
}

export default ParkProfileImage;