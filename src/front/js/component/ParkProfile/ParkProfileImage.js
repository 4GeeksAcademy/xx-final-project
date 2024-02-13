import React from 'react';
import Image from 'react-bootstrap/Image';

function ParkProfileImage({parkName}) {
  return (
    <>
      <div className="image-container">
        <Image
          className="parkImage"
          // src={"https://cdn.pixabay.com/photo/"+parkName}
        />
      </div>
    </>
  );
}

export default ParkProfileImage;