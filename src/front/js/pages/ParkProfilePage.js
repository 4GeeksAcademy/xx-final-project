import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import ParkProfileAccordion from '../component/ParkProfile/ParkProfileAccordion';
import ParkProfileImage from '../component/ParkProfile/ParkProfileImage';
import ParkProfileInfo from '../component/ParkProfile/ParkProfileInfo';
import '../../styles/parkProfilePage.css';
import background from '../../img/login-background.jpg';
import { useParams } from 'react-router-dom';

export const ParkProfilePage =
  () => {
    let theId =
      useParams().theid;
    const { store, actions } =
      useContext(Context);

    // Find the park based on the ID
    let park =
      store.parkList.find(
        (item) =>
          item.id == theId
      );

    // Check if park is not defined before rendering components
    if (!park) {
      return (
        <p>Park not found</p>
      ); // You can render an error message or redirect to a different page
    }

    return (
      <>
        <div
          className="background"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="side-by-side-container">
            <ParkProfileImage />
            {/* <ParkProfileImage parkName={park.fullName}/> */}
            <ParkProfileInfo
              park={park}
            />
          </div>
          <ParkProfileAccordion />
        </div>
      </>
    );
  };

export default ParkProfilePage;
