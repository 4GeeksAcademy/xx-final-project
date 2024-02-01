import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { RegularCard } from "./RegularCard.js";
import { Context } from "../../store/appContext.js";

export const FavParks = () => {
  const { store, actions } = useContext(Context);
  const userFavorites = store.user.favorites;
  const [cardsData, setCardsData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const fetchData = async () => {
    const params = {
      api_key: "512wN5Ol0eTdyS4E6KexHiCdDezf6hpcCbbsnPcn",
    };

    const queryParams = new URLSearchParams(params);
    const response = await fetch(
      `https://developer.nps.gov/api/v1/parks?${queryParams}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    setCardsData(data.data);
  };

  const fetchFavorites = async () => {
    const opts = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };
    await fetch(
      "https://jubilant-orbit-6qr7v7qp4grfrg6p-3001.app.github.dev/api/favorites",
      opts
    )
      .then((resp) => resp.json())
      .then((data) => setFavorites(data.favorites))
      .catch((error) => console.log("Error", error));
  };

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined) {
      fetchData();
      fetchFavorites();
    }
  }, [store.token]);

  const filteredCards = cardsData.filter(
    (park) => favorites && favorites.includes(park.id)
  );
  // console.log(filteredCards, favorites)

  return (
    <div>
      <h2>My Favorite Parks: </h2>
      <div>
        {filteredCards &&
          filteredCards.map((park) => (
           <RegularCard {...park} />
          ))}
      </div>
    </div>
  );
};
