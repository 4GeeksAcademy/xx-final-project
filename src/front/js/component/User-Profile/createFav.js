import React, { useState, useContext } from "react";

export const FavoritesContext = React.createContext(null);

export const FavoritesWrapper = (props) => {
    const [store, setStore] = useState({
        favorites: []
    });
    const [actions, setActions] = useState({
        addFavorites: (entity) => {
            setStore(({favorites}) => {
                const match = favorites.find((fav) => fav.id === entity.id)
                if (!match) {
                    return{
                        favorites: [...favorites, entity]
                    }
                }
                return {favorites}
            })
        },
        removeFavorites: (id) => {
            setStore(({favorites}) => ({
                favorites:favorites.filter((fav) => fav.id !== id),
            }));
        },
    });

    return (
        <FavoritesContext.Provider value={{store, actions}}>
            {props.children}
        </FavoritesContext.Provider>
    );
}