import React, { useState } from 'react';
import '../../styles/dashboard.css';
import Dashboardimage1 from "../../img/Dashboardimage1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import Sunset from '../../img/Sunset.jpg';

const activitiesData = [
  {
    name: 'Art and Culture',
    imageSrc: require("../../img/Theatre.png").default,
    description: 'Arts & Culture',
  },
  {
    name: 'Astronomy',
    imageSrc: require("../../img/telescope.png").default,
    description: 'Astronomy',
  },
  {
    name: 'Auto and ATV',
    imageSrc: require("../../img/atv.png").default,
    description: 'Auto and ATV',
  },
  {
    name: 'Biking',
    imageSrc: require("../../img/bike.png").default,
    description: 'Biking',
  },
  {
    name: 'Boating',
    imageSrc: require("../../img/boat.png").default,
    description: 'Boating',
  },
  {
    name: 'Camping',
    imageSrc: require("../../img/camping.png").default,
    description: 'Camping',
  },
  {
    name: 'Canyoneering',
    imageSrc: require("../../img/canyoneering.png").default,
    description: 'Canyoneering',
  },
  {
    name: 'Caving',
    imageSrc: require("../../img/cave.png").default,
    description: 'Caving',
  },
  {
    name: 'Climbing',
    imageSrc: require("../../img/climbing.png").default,
    description: 'Climbing',
  },
  {
    name: 'Compass and GPS',
    imageSrc: require("../../img/compass.png").default,
    description: 'Compass and GPS',
  },
  {
    name: 'Dog Sledding',
    imageSrc: require("../../img/dog.png").default,
    description: 'Dog Sledding',
  },
  {
    name: 'Fishing',
    imageSrc: require("../../img/fishing.png").default,
    description: 'Fishing',
  },
  {
    name: 'Flying',
    imageSrc: require("../../img/plane.png").default,
    description: 'Flying',
  },
  {
    name: 'Food',
    imageSrc: require("../../img/food.png").default,
    description: 'Food',
  },
  {
    name: 'Golfing',
    imageSrc: require("../../img/golf.png").default,
    description: 'Golfing',
  },
  {
    name: 'Guided Tours',
    imageSrc: require("../../img/tour.png").default,
    description: 'Guided Tours',
  },
  {
    name: 'Hands-On',
    imageSrc: require("../../img/hands.png").default,
    description: 'Hands-On',
  },
  {
    name: 'Hiking',
    imageSrc: require("../../img/hiker.png").default,
    description: 'Hiking',
  },
  {
    name: 'Horse Trekking',
    imageSrc: require("../../img/horse.png").default,
    description: 'Horse Trekking',
  },
  {
    name: 'Hunting and Gathering',
    imageSrc: require("../../img/bow.png").default,
    description: 'Hunting and Gathering',
  },
  {
    name: 'Park Film',
    imageSrc: require("../../img/film.png").default,
    description: 'Park Film',
  },
  {
    name: 'Playground',
    imageSrc: require("../../img/playground.png").default,
    description: 'Playground',
  },
  {
    name: 'SCUBA Diving',
    imageSrc: require("../../img/scuba.png").default,
    description: 'SCUBA Diving',
  },
  {
    name: 'Shopping',
    imageSrc: require("../../img/shopping.png").default,
    description: 'Shopping',
  },
  {
    name: 'Skiing',
    imageSrc: require("../../img/ski.png").default,
    description: 'Skiing',
  },
  {
    name: 'Snorkeling',
    imageSrc: require("../../img/snorkel.png").default,
    description: 'Snorkeling',
  },
  {
    name: 'Snow Play',
    imageSrc: require("../../img/snow.png").default,
    description: 'Snow Play',
  },
  {
    name: 'Snowmobiling',
    imageSrc: require("../../img/snowmobile.png").default,
    description: 'Snowmobiling',
  },
  {
    name: 'Snowshoeing',
    imageSrc: require("../../img/snowshoeing.png").default,
    description: 'Snowshoeing',
  },
  {
    name: 'Surfing',
    imageSrc: require("../../img/surf.png").default,
    description: 'Surfing',
  },
  {
    name: 'Swimming',
    imageSrc: require("../../img/swimming.png").default,
    description: 'Swimming',
  },
  {
    name: 'Team Sports',
    imageSrc: require("../../img/sport.png").default,
    description: 'Team Sports',
  },
  {
    name: 'Tubing',
    imageSrc: require("../../img/tube.png").default,
    description: 'Tubing',
  },
  {
    name: 'Water Skiing',
    imageSrc: require("../../img/waterskiing.png").default,
    description: 'Water Skiing',
  },
  {
    name: 'Wildlife Watching',
    imageSrc: require("../../img/binoculars.png").default,
    description: 'Wildlife Watching',
  },
 
];

export const Dashboard = () => {
  const customHeight = "489px";
  const customWidth = "1340px";
  const borderRadius = "20px";
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleGoBack = () => {
    setIsPopupOpen(false);
  };

  const cardsData1 = [
    { title: "Acadia", location: "Maine" },
    { title: "Great Smoky Mountain", location: "North Carolina, Tennessee" },
    { title: "Congaree", location: "South Carolina" },
    { title: "Shenandoah", location: "Virginia" },
  ];

  const cardsData2 = [
    { title: "New River Gorge", location: "West Virginia" },
    { title: "Cuyahoga Valley", location: "Ohio" },
    { title: "Theodore Roosevelt", location: "North Dakota" },
    { title: "Gateway Arch national Park", location: "Virginia" },
  ];
  
  const renderCard = (card) => (
    <div className="card" key={card.title}>
      <img src={Sunset} alt="Sunset" />
      <h5 style={{ marginLeft: '20px', marginTop: '10px' }}>{card.title}</h5>
      <div style={{ marginLeft: '20px', opacity: 0.6, marginBottom:'10px' }}>{card.location}</div>

      <div className="info-row">
        <span className="info-item" style={{ marginLeft: '20px' }}>Rating</span>
        <span className="info-item">Activity</span>
        <span className="info-item" style={{ marginRight: '20px' }}>Lodging</span>
      </div>

      <button className="learn-more-button" style={{ marginTop: '8px', marginLeft: '20px', marginRight: '20px'  }} >Learn More</button>
    </div>
  );
  

return (
  <div className="centered-container">
    <div className="dashboard-container" style={{ marginTop: '300px' }}>
      <img src={Dashboardimage1} style={{ height: customHeight, width: customWidth, borderRadius: borderRadius }} alt="Dashboard Image" />

      <div className="card-container">
      {cardsData1.map((card) => (
        <div key={card.title}>{renderCard(card)}</div>
      ))}
      </div>

      <div className="card-container">
      {cardsData2.map((card) => (
        <div key={card.title}>{renderCard(card)}</div>
      ))}
      </div>
  

    </div>
    <div className="box">
      <div className="group">
        <div className="div">
          <div className="text-wrapper-2">Homegrown adventure</div>
          <div className="centered-content">
            <input type="search" className="search-bar" placeholder="Start finding national parks" style={{ width: "250%", maxWidth: "1000px", marginTop: "10px" }} />
            <button className="button" onClick={handlePopupToggle}>Search by activity</button>
          </div>
        </div>
      </div>
    </div>

    {isPopupOpen && (
      <div className="activity-box">
        <div className="activities">
          <div className="activity-frame">
            <div className="div-activity-title">What’s your next adventure?</div>
            <div className="frame-2">
              <div className="frame-wrapper">
                <div className="frame-3">
                  {activitiesData.map(activity => (
                    <div className="frame-4" key={activity.name}>
                      <button className='Transparent'>
                        <img className="img" alt={`Mdi ${activity.name}`} src={activity.imageSrc} />
                        <p>{activity.name}</p>
                        <div className="frame-5">
                          <div className="normal-text-instance" text={activity.description} />
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="frame-9">
                <div className="frame-10">
                  <button>Find parks</button>
                  <button onClick={handleGoBack}>Go back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);
};



