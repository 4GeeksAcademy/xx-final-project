import React, { useContext, useEffect, useState } from "react";
import { RegularCard } from "../regularCard";

export const FavParks = ({data}) => {
    // const {store, actions} = useContext(FavoritesContext);    
    const [parkInfo, setparkInfo] = useState([]);
    const [loading, setLoading] = useState([]);
    const [error, setError] = useState([]);

    const handleRemove = (id) => {
        actions.removeFavorites(id)
    }

    const apiKey = '512wN5Ol0eTdyS4E6KexHiCdDezf6hpcCbbsnPcn';
    const apiUrl = 'https://developer.nps.gov/api/v1/parks';

        useEffect(() => {
            const fetchData = async() =>{
                const params ={
                    api_key: apiKey,
                };

            const queryParams = new URLSearchParams(params);
            const fullUrl = `${apiUrl}?${queryParams}`;
        
                try{
                    const response = await fetch(fullUrl);

                    if (!response.ok){
                        throw new Error(`HTTP error! Status: ${response.status} `);
                    }

                    const data = await response.json();
                    setparkInfo(data.data);
                    setLoading(false);
                } catch (error) {
                    setError(error.message);
                    setLoading(false);
                }
        };

        fetchData();
        }, [apiKey]);

    return(
        <div>
            <div>
                <h2>My Favorites:</h2>
            </div>
            <div>
            {
                parkInfo.map(({id, fullName, description, images, addresses}) => {
                    return(
                        < RegularCard key={id} data={{id, fullName, images, description, addresses}} />
                    )
                })
            }
            </div>
        </div>
    );
};
