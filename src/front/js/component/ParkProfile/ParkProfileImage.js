// import React from 'react';
// import Image from 'react-bootstrap/Image';

// function ParkProfileImage({ park }) {
//   return (
//     <>
//       <div className="image-container">
//         <Image
//           className="parkImage"
//           src={park.images}
//         />
//       </div>
//     </>
//   );
// }

// export default ParkProfileImage;

// import React, { useState, useEffect } from 'react';
// import Image from 'react-bootstrap/Image';

// function ParkProfileImage({ park }) {
//   const [imageUrl, setImageUrl] = useState(null);

//   useEffect(() => {
//     const fetchImage = async () => {
//       try {
//         const response = await fetch(park.images); // Assuming park.images is the URL of the image
//         const blob = await response.blob();
//         const objectURL = URL.createObjectURL(blob);
//         setImageUrl(objectURL);
//       } catch (error) {
//         console.error('Error fetching image:', error);
//       }
//     };

//     fetchImage();

//     // Cleanup function to revoke the object URL when component unmounts
//     return () => {
//       if (imageUrl) {
//         URL.revokeObjectURL(imageUrl);
//       }
//     };
//   }, [park.image]);

//   return (
//     <>
//       <div className="image-container">
//         {imageUrl && <Image className="parkImage" src={imageUrl} alt="Park Image" />}
//       </div>
//     </>
//   );
// }

// export default ParkProfileImage;


import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';

function ParkProfileImage({ park }) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // Check if park is null or undefined
    if (!park) {
      return; // Return early if park is falsy
    }

    // Extract imageUrl from park.images
    const imageUrl = park.images?.[0]?.url;

    // Check if imageUrl is available
    if (imageUrl) {
      const fetchImage = async () => {
        try {
          const response = await fetch(imageUrl); // Fetch the image using imageUrl
          const blob = await response.blob();
          const objectURL = URL.createObjectURL(blob);
          setImageUrl(objectURL);
        } catch (error) {
          console.error('Error fetching image:', error);
        }
      };

      fetchImage();

      // Cleanup function to revoke the object URL when component unmounts
      return () => {
        if (imageUrl) {
          URL.revokeObjectURL(imageUrl);
        }
      };
    }
  }, [park]);

  return (
    <>
      <div className="image-container">
        {imageUrl && <Image className="parkImage" src={imageUrl} alt="Park Image" />}
      </div>
    </>
  );
}

export default ParkProfileImage;
