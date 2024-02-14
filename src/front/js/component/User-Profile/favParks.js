import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { RegularCard } from "./RegularCard.js";
import { Context } from "../../store/appContext.js";
import "../../../styles/user-profile/favParks.css"

export const FavParks = () => {
  const { store, actions } = useContext(Context);
  const [filteredCards, setFilteredCards] = useState([]);

  
  useEffect(() => {
    if ( store.parkList && store.token && store.token != "" && store.token != undefined) {
      setFilteredCards(
        store.parkList.filter((park) => store.favorites && store.favorites.includes(park.id))
      );
    }
  }, [ store.parkList, store.token, store.favorites]);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined) {
      actions.fetchFavorites();
    }
  }, [store.token]);

  return (
    <div>
      <h2>My Favorite Parks: </h2>
      <div className="parkCardsWrapper">
        {filteredCards &&
          filteredCards.map((favorite) => (
            <RegularCard
              key={favorite.id}
              data={favorite}
              deleteFavorites={actions.deleteFavorites}
            />
          ))}
      </div>
    </div>
  );
};
