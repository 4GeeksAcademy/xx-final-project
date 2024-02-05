import React from 'react';
import Image from 'react-bootstrap/Image';
import Dashboardimage1 from "../../../img/Arianna's pngs/Dashboardimage1.jpg";

const DashboardImg = () => {
  return (
    <Image
      src={Dashboardimage1}
      fluid
      style={{ width: '1340px', height: '489px', marginLeft: '290px', marginBottom: '20px' }}
    /> 
  );
}

export default DashboardImg;
