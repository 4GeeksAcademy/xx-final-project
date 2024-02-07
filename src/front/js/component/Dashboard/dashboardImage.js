import React, { useContext, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Dashboardimage1 from "../../../img/Arianna's pngs/Dashboardimage1.jpg";
import ParkCardList from '/workspaces/xx-final-project/src/front/js/component/Dashboard/parkCard.js';
import PopupSelection from '/workspaces/xx-final-project/src/front/js/component/Dashboard/popupSelection.js';
import { Context } from '../../store/appContext';

const DashboardImg = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleActivitySelect = (activity) => {
    setSelectedActivity(activity);
  };

  return (
    <div className='container-fluid'>
      <div className='image-wrapper' style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <Image
          src={Dashboardimage1}
          fluid
          style={{ width: '1340px', height: '489px', position: 'relative' }}
        />
        <div className='search-and-popup-container' style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
          <div className='search-bar'>
            <input
              type="text"
              placeholder="Search by Park Name"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <PopupSelection onActivitySelect={handleActivitySelect} />
        </div>
      </div>
      <ParkCardList searchQuery={searchQuery} selectedActivity={selectedActivity} />
    </div>
  );
};

export default DashboardImg;
