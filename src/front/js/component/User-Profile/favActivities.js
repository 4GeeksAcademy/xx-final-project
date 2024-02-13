import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../../../styles/user-profile/favActivities.css"
import Carousel from 'react-bootstrap/Carousel';
import food from "../../../img/Arianna's pngs/food.png"
import Astronomy from "../../../img/Arianna's pngs/Astronomy.png"
import stargazing from "../../../img/Arianna's pngs/stargazing.png"
import picnicking from "../../../img/Arianna's pngs/picnicking.png"
import birdwatching from "../../../img/Arianna's pngs/birdwatching.png"
import shopping from "../../../img/Arianna's pngs/shopping.png"
import biking from "../../../img/Arianna's pngs/biking.png"
import boating from "../../../img/Arianna's pngs/boating.png"
import sailing from "../../../img/Arianna's pngs/sailing.png"
import camping from "../../../img/Arianna's pngs/camping.png"
import climbing from "../../../img/Arianna's pngs/climbing.png"
import geocaching from "../../../img/Arianna's pngs/geocaching.png"
import fishing from "../../../img/Arianna's pngs/fishing.png"
import hiking from "../../../img/Arianna's pngs/hiking.png"
import paddling from "../../../img/Arianna's pngs/paddling.png"
import canoeing from "../../../img/Arianna's pngs/canoeing.png"
import kayaking from "../../../img/Arianna's pngs/kayaking.png"
import skiing from "../../../img/Arianna's pngs/skiing.png"
import snowshoeing from "../../../img/Arianna's pngs/snowshoeing.png"
import swimming from "../../../img/Arianna's pngs/swimming.png"
import orienteering from "../../../img/Arianna's pngs/orienteering.png"
import snorkeling from "../../../img/Arianna's pngs/snorkeling.png"
import surfing from "../../../img/Arianna's pngs/surfing.png"
import hunting from "../../../img/Arianna's pngs/hunting.png"
import theater from "../../../img/Arianna's pngs/theater.png"
import playground from "../../../img/Arianna's pngs/playground.png"
import reenactments from "../../../img/Arianna's pngs/reenactments.png"
import flying from "../../../img/Arianna's pngs/flying.png"
import canyoneering from "../../../img/Arianna's pngs/canyoneering.png"
import dining from "../../../img/Arianna's pngs/dining.png"
import tubing from "../../../img/Arianna's pngs/tubing.png"
import guidedTours from "../../../img/Arianna's pngs/guidedTours.png"
import freshwaterFishing from "../../../img/Arianna's pngs/freshwaterfishing.png"
import selfWalking from "../../../img/Arianna's pngs/selfWalking.png"
import handsOn from "../../../img/Arianna's pngs/handsOn.png"
import juniorRanger from "../../../img/Arianna's pngs/juniorRanger.png"
import wildlifeWatching from "../../../img/Arianna's pngs/wildlifeWatching.png"
import film from "../../../img/Arianna's pngs/film.png"
import museum from "../../../img/Arianna's pngs/museum.png"
import bookStore from "../../../img/Arianna's pngs/bookStore.png"
import giftStore from "../../../img/Arianna's pngs/giftStore.png"
import theatre from "../../../img/Arianna's pngs/theatre.png"
import culture from "../../../img/Arianna's pngs/culture.png"
import group from "../../../img/Arianna's pngs/group.png"
import rockclimbing from "../../../img/Arianna's pngs/rockclimbing.png"
import compass from "../../../img/Arianna's pngs/compass.png"
import flyfishing from "../../../img/Arianna's pngs/flyfishing.png"
import saltwater from "../../../img/Arianna's pngs/saltwater.png"
import shuttle from "../../../img/Arianna's pngs/shuttle.png"
import boattour from "../../../img/Arianna's pngs/boattour.png"
import analysis from "../../../img/Arianna's pngs/analysis.png"
import countryhiking from "../../../img/Arianna's pngs/countryhiking.png"
import horseriding from "../../../img/Arianna's pngs/horseriding.png"
import horse from "../../../img/Arianna's pngs/horse.png"
import iceskating from "../../../img/Arianna's pngs/iceskating.png"
import stand from "../../../img/Arianna's pngs/stand.png"
import ccski from "../../../img/Arianna's pngs/ccski.png"
import snow from "../../../img/Arianna's pngs/snow.png"
import snowmobile from "../../../img/Arianna's pngs/snowmobile.png"
import freshwaterswim from "../../../img/Arianna's pngs/freshwaterswim.png"
import saltwaterswim from "../../../img/Arianna's pngs/saltwaterswim.png"
import history from "../../../img/Arianna's pngs/history.png"
import person from "../../../img/Arianna's pngs/person.png"
import atv from "../../../img/Arianna's pngs/atv.png"
import scenic from "../../../img/Arianna's pngs/scenic.png"
import mountainbike from "../../../img/Arianna's pngs/mountainbike.png"
import road from "../../../img/Arianna's pngs/road.png"
import motor from "../../../img/Arianna's pngs/motor.png"
import ccamp from "../../../img/Arianna's pngs/ccamp.png"
import carcamp from "../../../img/Arianna's pngs/carcamp.png"
import rv from "../../../img/Arianna's pngs/rv.png"
import car from "../../../img/Arianna's pngs/car.png"
import art from "../../../img/Arianna's pngs/art.png"
import forest from "../../../img/Arianna's pngs/forest.png"
import plant from "../../../img/Arianna's pngs/plant.png"
import wwriver from "../../../img/Arianna's pngs/wwriver.png"
import craftd from "../../../img/Arianna's pngs/craftd.png"
import weapon from "../../../img/Arianna's pngs/weapon.png"
import jetski from "../../../img/Arianna's pngs/jetski.png"
import scuba from "../../../img/Arianna's pngs/scuba.png"
import waterskiing from "../../../img/Arianna's pngs/waterskiing.png"
import sport from "../../../img/Arianna's pngs/sport.png"
import mountainc from "../../../img/Arianna's pngs/mountainc.png"
import bhike from "../../../img/Arianna's pngs/bhike.png"
import volunteer from "../../../img/Arianna's pngs/volunteer.png"
import offroad from "../../../img/Arianna's pngs/offroad.png"
import horsestock from "../../../img/Arianna's pngs/horsestock.png"
import offtrail from "../../../img/Arianna's pngs/offtrail.png"
import horsecamp from "../../../img/Arianna's pngs/horsecamp.png"
import snowtube from "../../../img/Arianna's pngs/snowtube.png"
import dog from "../../../img/Arianna's pngs/dog.png"
import fflying from "../../../img/Arianna's pngs/fflying.png"
import berry from "../../../img/Arianna's pngs/berry.png"
import atvoff from "../../../img/Arianna's pngs/atvoff.png"
import pool from "../../../img/Arianna's pngs/pool.png"
import music from "../../../img/Arianna's pngs/music.png"
import { Context } from "../../store/appContext.js"

export const FavActivities = () => {
  const { store, actions } = useContext(Context)
  const [showModal, setShowModal] = useState(false);
  const [activities, setActivities] = useState([]);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const activityImageMap = {
    food: food,
    astronomy: Astronomy,
    stargazing: stargazing,
    picnicking: picnicking,
    birdwatching: birdwatching,
    shopping: shopping,
    biking: biking,
    boating: boating,
    sailing: sailing,
    camping: camping,
    climbing: climbing,
    geocaching: geocaching,
    fishing: fishing,
    hiking: hiking,
    paddling: paddling,
    canoeing: canoeing,
    kayaking: kayaking,
    skiing: skiing,
    snowshoeing: snowshoeing,
    swimming: swimming,
    orienteering: orienteering,
    snorkeling: snorkeling,
    surfing: surfing,
    hunting: hunting,
    theater: theater,
    playground: playground,
    reenactments: reenactments,
    flying: flying,
    canyoneering: canyoneering,
    dining: dining,
    tubing: tubing,
    "guided tours": guidedTours,
    "freshwater fishing": freshwaterFishing,
    "self-guided tours - walking": selfWalking,
    "hands-on": handsOn,
    "junior ranger program": juniorRanger,
    "wildlife watching": wildlifeWatching,
    "park film": film,
    "museum exhibits": museum,
    "bookstore and park store": bookStore,
    "gift shop and souvenirs": giftStore,
    "arts and culture": theatre,
    "cultural demonstrations": culture,
    "group camping": group,
    "rock climbing": rockclimbing,
    "compass and gps": compass,
    "fly fishing": flyfishing,
    "saltwater fishing": saltwater,
    "bus/shuttle guided tour": shuttle,
    "boat tour": boattour,
    "citizen science": analysis,
    "front-country hiking": countryhiking,
    "horseback riding": horseriding,
    "horse trekking": horse,
    "ice skating": iceskating,
    "stand up paddleboarding": stand,
    "cross-country skiing": ccski,
    "snow play": snow,
    "snowmobiling": snowmobile,
    "freshwater swimming": freshwaterswim,
    "saltwater swimming": saltwaterswim,
    "living history": history,
    "first person interpretation": person,
    "auto and atv": atv,
    "scenic driving": scenic,
    "mountain biking": mountainbike,
    "road biking": road,
    "motorized boating": motor,
    "motorized boating": motor,
    "canoe or kayak camping": ccamp,
    "car or front country camping": carcamp,
    "rv camping": rv,
    "self-guided tours - auto": car,
    "arts and crafts": art,
    "backcountry camping": forest,
    "hunting and gathering": plant,
    "whitewater rafting": wwriver,
    "whitewater rafting": wwriver,
    "craft demonstrations": craftd,
    "historic weapons demonstration": weapon,
    "jet skiing": jetski,
    "scuba diving": scuba,
    "water skiing": waterskiing,
    "team sports": sport,
    "mountain climbing": mountainc,
    "backcountry hiking": bhike,
    "volunteer vacation": volunteer,
    "auto off-roading": offroad,
    "horse camping (see also horse/stock use)": horsestock,
    "off-trail permitted hiking": offtrail,
    "horse camping (see also camping)": horsecamp,
    "snow tubing": snowtube,
    "dog sledding": dog,
    "fixed wing flying": fflying,
    "gathering and foraging": berry,
    "atv off-roading": atvoff,
    "pool swimming": pool,
    "live music": music,
  };

  useEffect(() => {
    const parkActivities = store.parkList.map(park => park.activities || []).flat();

    // Remove duplicate activities based on id
    const uniqueActivities = Array.from(new Set(parkActivities.map(activity => activity.id)))
      .map(id => parkActivities.find(activity => activity.id === id));

    setActivities(uniqueActivities);
  }, [store.parkList]);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined) {
      actions.getActivities();
    }
  }, [store.token]);

  return (
    <div className='fav-activity'>
      <div className='top-activity'>
        <Modal.Title>
          Favorite Activities:
        </Modal.Title>
        <Button className='addActivity' variant="primary" onClick={handleShow}>
          Add
        </Button>
      </div>

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Choose up to 5</Modal.Title>
          <Modal.Title className='activity-length'>{store.activity.length}/5</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {activities.filter(activity => !store.activity.includes(activity.name)).map((activity, index) => (
              <Button
                key={index}
                style={{ width: '144px', height: '144px', marginBottom: '15px' }}
                onClick={() => actions.handleActivitySelect(activity.name)}
              >
                <img
                  src={activityImageMap[activity.name.toLowerCase()]}
                  alt={activity.name}
                  style={{ width: '64px', height: '64px', objectFit: 'cover' }}
                />
                {activity.name}
              </Button>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="primary">
            Done
          </Button>
        </Modal.Footer>
      </Modal>

      <div className='carousel'>
        <Carousel>
          {store.activity.map((activity, index) => (
            <Carousel.Item key={index} className="selected-activity">
              <img
                src={activityImageMap[activity.toLowerCase()]}
                alt={activity}
                style={{ width: '64px', height: '64px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3 className='activity-name'>{activity} </h3>
              </Carousel.Caption>
              <Button variant="danger" className='remove-btn' size="sm" onClick={() => actions.handleActivityRemove(activity)}>
                Remove
              </Button>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div >
  );
};
