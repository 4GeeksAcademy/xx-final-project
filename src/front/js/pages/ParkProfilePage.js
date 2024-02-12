import React, {useContext} from 'react';
import { Context } from '../store/appContext';
import ParkProfileAccordion from '../component/ParkProfile/ParkProfileAccordion';
import ParkProfileImage from '../component/ParkProfile/ParkProfileImage';
import ParkProfileInfo from '../component/ParkProfile/ParkProfileInfo';
import '../../styles/parkProfilePage.css';
import background from '../../img/background-imgs/cabin-sunset.jpg';
import { useParams } from 'react-router-dom';

export const ParkProfilePage = () => {
    const theId = useParams().theid
    const {store, actions}= useContext(Context);
    const park = store.parkList.find((item)=>item.id==theId);

    if (!park) {
      return (
        <p>Park not found</p>
      );
    }

    return (
      <>
        <div
          className="background"
          style={{
            backgroundImage: `url(${background})`
          }}
        >
          <div className="side-by-side-container">
            <ParkProfileImage park={park}/>
            <ParkProfileInfo park={park} />
          </div>
          <ParkProfileAccordion park={park}/>
        </div>
      </>
    );
  };

export default ParkProfilePage;
