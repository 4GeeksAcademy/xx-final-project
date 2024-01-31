import React from "react";
import { Button } from "react-bootstrap/";
import { useContext } from "react";

import { RegularCard } from "./RegularCard.js";

export const FavParks = () => {
  const { store, actions } = useContext(Context);
  const userFavorites = store.user.favorites;

  const handleAddToFavorites = (id) => {
    actions.removeFavorites(id);
  };

  return (
    <div>
      <div>
        <h2>My Favorites: </h2>
      </div>
      <div>
        {store.favorites.map(({id, fullName, images, description, addresses}) => (
          <div key={id}>
            <Button variant="danger" onClick={() => handleRemove(id)}>
              Remove from Favorites
            </Button>
            <RegularCard data={{id, fullName, images, description, addresses}} />
          </div>
        ))}
      </div>
    </div>
  );
}