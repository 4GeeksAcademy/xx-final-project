import React from 'react';
import Image from 'react-bootstrap/Image';

function ParkProfileImage() {
  return (
    <>
      <div className="image-container">
        <Image
          className="parkImage"
          src="https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_1280.jpg"
        />
      </div>
    </>
  );
}

export default ParkProfileImage;
