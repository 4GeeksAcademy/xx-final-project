import React from 'react';
import ParkCard from "../component/Dashboard/parkCard";
import DashboardImg from "../component/Dashboard/dashboardImage";
import PopupSelection from "../component/Dashboard/popupSelection";

export const Dashboard = () => {
  return (
    <>
      <div>
        {/* <PopupSelection /> */}
        <DashboardImg />
        <ParkCard />
      </div>
    </>
  );
};

export default Dashboard;
