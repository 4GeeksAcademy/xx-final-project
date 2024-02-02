import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { RegularCard } from "./RegularCard.js";
import { Context } from "../../store/appContext.js";

export const FavParks = () => {
  const { store, actions } = useContext(Context);
  const [cardsData, setCardsData] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
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
        Referer: "test",
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

  const deleteFavorites = async (park_id) => {
    const opts = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };

    try {
      const response = await fetch(
        `https://jubilant-orbit-6qr7v7qp4grfrg6p-3001.app.github.dev/api/favorite/${park_id}`,
        opts
      );
      if (!response.ok) {
        throw new Error("HTTP error! Status: ${response.status}");
      }

      setFavorites((prevFavorites) => {
        const updatedFavorites = prevFavorites.filter(
          (fav) => fav !== park_id
        );
        return updatedFavorites;
      });
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined) {
      setFilteredCards(
        cardsData.filter((park) => favorites && favorites.includes(park.id))
      );
    }
  }, [cardsData, store.token, favorites]);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined) {
      fetchFavorites();
      fetchData();
    }
  }, [store.token]);

  return (
    <div>
      <h2>My Favorite Parks: </h2>
      <div>
        {filteredCards &&
          filteredCards.map((favorite) => (
            <RegularCard
              key={favorite.park_id}
              data={favorite}
              deleteFavorites={deleteFavorites}
            />
          ))}
      </div>
    </div>
  );
};
