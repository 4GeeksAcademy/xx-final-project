import React from 'react';
import ParkProfileAccordion from '../component/ParkProfile/ParkProfileAccordion';
import ParkProfileImage from '../component/ParkProfile/ParkProfileImage';
import ParkProfileDescription from '../component/ParkProfile/ParkProfileDescription';
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

          <ParkProfileImage />
          <ParkProfileDescription />
          <ParkProfileAccordion />
        </div>
      </>
    );
  };

export default ParkProfilePage;
