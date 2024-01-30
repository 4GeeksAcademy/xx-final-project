import React from 'react';
import  { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'



function ParkProfileInfo() {

  const [parkInfo, setParkInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


const apiKey = '512wN5Ol0eTdyS4E6KexHiCdDezf6hpcCbbsnPcn';
const apiUrl = 'https://developer.nps.gov/api/v1/parks';

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
      setParkInfo(data.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  fetchData();
}, [apiKey]);


  return (
    <Card className="parkInfo mb-5">
      <Card.Header className='name-text'>{parkInfo.length > 0 ? parkInfo[0].fullName : 'Park Address'}
      <p className='address'>
            {parkInfo.length > 0 &&
            parkInfo[0].addresses.length > 0 &&
            parkInfo[0].addresses[0].line1 &&
            parkInfo[0].addresses[0].city &&
            parkInfo[0].addresses[0].stateCode &&
            parkInfo[0].addresses[0].postalCode
            ? `${parkInfo[0].addresses[0].line1}, ${parkInfo[0].addresses[0].city}, ${parkInfo[0].addresses[0].stateCode} ${parkInfo[0].addresses[0].postalCode}`
            : 'Park Address'}
            </p>
      </Card.Header>
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>
        {parkInfo.length > 0 ? parkInfo[0].description : 'Loading...'}
        </Card.Text>
        <Button variant="primary">Link to more details</Button>
      </Card.Body>
      <Card.Footer>
        <p className='hrs-of-operation-header'>Hours of Operation</p>
        <div className="hours-text">
        {parkInfo.length > 0 && parkInfo[0].operatingHours.map((hours, index) => (
            <p key={index}> <FontAwesomeIcon icon={faClock} /> {hours.description}</p>
          ))}
          <p>*Holidays may affect these hours</p>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default ParkProfileInfo;