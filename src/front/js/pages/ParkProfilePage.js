import React, {useContext} from 'react';
import { Context } from '../store/appContext';
import ParkProfileAccordion from '../component/ParkProfile/ParkProfileAccordion';
import ParkProfileImage from '../component/ParkProfile/ParkProfileImage';
import ParkProfileInfo from '../component/ParkProfile/ParkProfileInfo';
import '../../styles/parkProfilePage.css';
import background from '../../img/background-imgs/cabin-sunset.jpg';
import { useParams } from 'react-router-dom';

export const ParkProfilePage = () => {
    let theId = useParams().theid
    const {store,actions}= useContext(Context)
    let park = store.parkList.find((item)=>item.id==theId)
    return (
      <>
        <div
          className="background"
          style={{
            backgroundImage: `url(${background})`
          }}
        >
          <div className="side-by-side-container">
            <ParkProfileImage />
            <ParkProfileInfo park={park}/>
          </div>
          <ParkProfileAccordion />
        </div>
      </>
    );
  };

export default ParkProfilePage;
