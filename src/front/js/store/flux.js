const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      parkList: [],
      message: "test",
      favorites: [],
      user_info: null
    },

    actions: {
      getParkInfo: async () => {
        let opt = {
          method: "GET",
          headers: { "x-api-key": process.env.PARK_SERVICE_API_KEY },
        };
        try {
          const response = await fetch(process.env.PARK_SERVICE_URL, opt);

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          setStore({ ...getStore(), parkList: data.data });
        } catch (error) {
          console.log(error.message);
        }
      },

      fetchFavorites: async () => {
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
          .then((data) => setStore({favorites: data.favorites}))
          .catch((error) => console.log("Error", error));
      },    

      setInfo: async (name, bio) => {
        const opts = {
          method: "POST",
          headers: {
            Referer: "test",
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
          body:  JSON.stringify({
            "name": name,
            "bio": bio
          })
        };
        await fetch(
          "https://jubilant-orbit-6qr7v7qp4grfrg6p-3001.app.github.dev/api/userinfo",
          opts
        )
          .then((resp) => resp.json())
          .catch((error) => console.log("Error", error));
      },    

      getInfo: async () => {
        const opts = {
          method: "GET",
          headers: {
            Referer: "test",
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        };
        await fetch(
          "https://jubilant-orbit-6qr7v7qp4grfrg6p-3001.app.github.dev/api/usersinfo",
          opts
        )
          .then((resp) => resp.json())
          .then((data) => setStore({user_info: data}))
          .catch((error) => console.log("Error", error));
      },    

      deleteFavorites: async (park_id) => {
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
    
          setStore(
            {favorites: getStore().favorites.filter(
              (fav) => fav !== park_id
            )}
          );
        } catch (error) {
          console.log("Error", error);
        }
      },

      syncTokenFromSessionStore: () => {
        const token = sessionStorage.getItem("token");
        console.log(
          "Application just loaded, syncing the session storage token"
        );
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },

      logout: () => {
        sessionStorage.removeItem("token");
        console.log("You have logged out");
        setStore({ token: null, message: null });
      },

			signup: async(email, password) => {
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				};
				try{
					const resp = await fetch("https://jubilant-orbit-6qr7v7qp4grfrg6p-3001.app.github.dev/api/signup", opts)
					if(resp.status !== 200){
						alert("There has been some error");
						return false;
					}

          const data = await resp.json();
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("There has been an error login");
        }
      },

			login: async(email, password) => {
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				};
				try{
					const resp = await fetch("https://jubilant-orbit-6qr7v7qp4grfrg6p-3001.app.github.dev/api/token", opts)
					if(resp.status !== 200){
						alert("There has been some error");
						return false;
					}

          const data = await resp.json();
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token});
          return true;
        } catch (error) {
          console.error("There has been an error login");
		  return false;
        }
      },

			getMessage: () => {
				const store = getStore();
				const opts = {
					headers: {
						"Authorization": "Bearer " + store.token
					}
				};
				fetch("https://jubilant-orbit-6qr7v7qp4grfrg6p-3001.app.github.dev/api/hello", opts)
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},

      addFavorite: (id) => {
        const store = getStore();
        store.favorites.push(id)
        setStore(store)

				// update to where it doesn't log user out after favoriting something
				// setStore({
				// 	user: {
				// 		...store.user,
				// 		favorites: updatedFavorites
				// 	}
				// });
				// this part ^
				
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${sessionStorage.getItem("token")}`
					},
					body: JSON.stringify({
						park_id: id
					})
				};
				fetch("https://jubilant-orbit-6qr7v7qp4grfrg6p-3001.app.github.dev/api/favorite", opts)
					.then(resp => resp.json())
					.catch(error => console.log("Error", error));
			},

      removeFavorite: (parkId) => {
        const store = getStore();
        const updatedFavorites = store.user.favorites.filter(
          (park) => park.id !== parkId
        );

        setStore({
          user: {
            ...store.user,
            favorites: updatedFavorites,
          },
        });
      },
    },
  };
};

export default getState;
