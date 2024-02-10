import React from 'react';
import Image from 'react-bootstrap/Image';

function ParkProfileImage({ park }) {

  const parkImage = park.images.length > 0 ? park.images[1] : null;

  return (
    <div className="image-container">
      {parkImage && (
        <Image
          className="parkImage"
          src={parkImage.url}
          alt={parkImage.title}
        />
      )}
    </div>
  );
}

export default ParkProfileImage;
