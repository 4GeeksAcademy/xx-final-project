import React from 'react';
import ParkProfileAccordion from '../component/ParkProfile/ParkProfileAccordion';
import ParkProfileImage from '../component/ParkProfile/ParkProfileImage';
import ParkProfileInfo from '../component/ParkProfile/ParkProfileInfo';
import '../../styles/parkProfilePage.css';
import background from '../../img/login-background.jpg';

export const ParkProfilePage =
  () => {
    return (
      <>
        <div
          className="background"
          style={{
            backgroundImage: `url(${background})`,
            width: '100%',
            height: '100%',
          }}
        >
          <div className="side-by-side-container">
            <ParkProfileImage />
            <ParkProfileInfo />
          </div>
          <ParkProfileAccordion />
        </div>
      </>
    );
  };

export default ParkProfilePage;
