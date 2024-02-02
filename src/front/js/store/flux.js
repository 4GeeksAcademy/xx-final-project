const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		token: null,
		parkList: [],
		favorites:[]
	  },
	  actions: {
		// Use getActions to call a function within a fuction
		getParkInfo: async () => {
		  let opt = {
			method: 'GET',
			headers: {"x-api-key": process.env.PARK_SERVICE_API_KEY},
		  }
		  try {
			const response = await fetch(process.env.PARK_SERVICE_URL,opt);
  
			if (!response.ok) {
			  throw new Error(`HTTP error! Status: ${response.status}`);
			}
  
			const data = await response.json();
			setStore({ parkList: data.data });
		  } catch (error) {
			console.log(error.message);
		  }
		},
  
		syncTokenFromSessionStore: () => {
		  const token = sessionStorage.getItem("token");
		  console.log(
			"Application just loaded, syncing the session storage token"
		  );
		  if (token && token != "" && token != undefined)
			setStore({
			  token: token,
			});
		},
  
		logout: () => {
		  sessionStorage.removeItem("token");
		  console.log("You have logged out");
		  setStore({
			token: null,
			message: null,
		  });
		},
  
		signup: async (email, password) => {
		  const opts = {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify({
			  email: email,
			  password: password,
			}),
		  };
		  try {
			const resp = await fetch(
			  "https://cuddly-goldfish-gj74j9jw5962gx4-3001.app.github.dev/api/signup",
			  opts
			);
			if (resp.status !== 200) {
			  alert("There has been some error");
			  return false;
			}
  
			const data = await resp.json();
			sessionStorage.setItem("token", data.access_token);
			setStore({
			  token: data.access_token,
			});
			return true;
		  } catch (error) {
			console.error("There has been an error login");
		  }
		},
  
		login: async (email, password) => {
		  const opts = {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify({
			  email: email,
			  password: password,
			}),
		  };
		  try {
			const resp = await fetch(
			  "https://cuddly-goldfish-gj74j9jw5962gx4-3001.app.github.dev/api/token",
			  opts
			);
			if (resp.status !== 200) {
			  alert("There has been some error");
			  return false;
			}
  
			const data = await resp.json();
			sessionStorage.setItem("token", data.access_token);
			setStore({
			  token: data.access_token,
			});
			return true;
		  } catch (error) {
			console.error("There has been an error login");
		  }
		},
	  },
	};
  };
  
  export default getState;
  