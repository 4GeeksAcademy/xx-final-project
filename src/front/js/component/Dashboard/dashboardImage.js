import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Dashboardimage1 from "../../../img/Arianna's pngs/Dashboardimage1.jpg";

const DashboardImg = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='containerFluid position-relative text-center'>
      <Image
        src={Dashboardimage1}
        fluid
        style={{ width: '100%', height: 'auto' }}
      />
      <div className='search-bar position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <input
          type="text"
          placeholder="Search by Park Name"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default DashboardImg;







