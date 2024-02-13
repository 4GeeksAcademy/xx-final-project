import React, { useContext, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Dashboardimage1 from "../../../img/Arianna's pngs/Dashboardimage1.png";
import ParkCardList from '/workspaces/xx-final-project/src/front/js/component/Dashboard/parkCard.js';
import PopupSelection from '/workspaces/xx-final-project/src/front/js/component/Dashboard/popupSelection.js';
import { Context } from '../../store/appContext';
import '../../../styles/dashboard.css'

const DashboardImg = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleActivitySelect = (activity) => {
    setSelectedActivity(activity);
  };

  return (
    <div className='container-fluid'>
      <div className='image-wrapper dashboard-image-wrapper'>
        <Image
          src={Dashboardimage1}
          fluid
          className='dashboard-image'
        />

        <p className='results-text'>Results: </p>

        <div className='search-and-popup-container'>
          <div className='search-bar'>
            <p className='home-grown-text'>Home grown adventure</p>
            <input
              type="text"
              placeholder="Search by Park Name"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <PopupSelection onActivitySelect={handleActivitySelect} className="popup-style"/>
        </div>
      </div>
      <ParkCardList searchQuery={searchQuery} selectedActivity={selectedActivity} />
    </div>
  );
};

export default DashboardImg;