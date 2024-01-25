import React from 'react';
import Image from 'react-bootstrap/Image';

function ParkProfileImage() {
  return (
    <>
      <div className="image-container">
        <Image
          className="parkImage"
          src="https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_1280.jpg"
        />
      </div>
    </>
  );
}

export default ParkProfileImage;
