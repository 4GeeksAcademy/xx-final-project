import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';

function ParkProfileImage({ parkCode }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = '512wN5Ol0eTdyS4E6KexHiCdDezf6hpcCbbsnPcn';
  const apiUrl = `https://developer.nps.gov/api/v1/parks/${parkCode}/images`;

  useEffect(() => {
    const fetchData = async () => {
      const params = {
        api_key: apiKey,
        // Add other parameters
      };

      const queryParams = new URLSearchParams(params);
      const fullUrl = `${apiUrl}?${queryParams}`;

      try {
        const response = await fetch(fullUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.data && data.data.length > 0) {
          // Assuming the first image is used
          setImage(data.data[0].url);
        } else {
          setImage(null);
        }

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiKey, apiUrl]);

  return (
    <>
      <div className="image-container">
        <Image
          className="parkImage"
          {...loading && <p>Loading image...</p>}
          {...error && <p>Error: {error}</p>}
          {...image && <img src={image} alt="Park" />}
        />
      </div>
    </>
  );
}

export default ParkProfileImage;
