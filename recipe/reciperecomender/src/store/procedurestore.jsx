import { useEffect, useState } from "react";
import { createContext } from "react";

export const procedurelist = createContext({
  list: [],
});

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}

const ListProvider = ({ children }) => {
  const [list, setlist] = useState([]);
  const [currentDate, setcurrentDate] = useState(getDate());

  const showNotification = () => {
    if (Notification.permission === "granted") {
      new Notification("Recipe Updated!", {
        body: "New Recipe has been updated.",
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Recipe Updated!", {
            body: "New Recipe has been updated.",
          });
        }
      });
    }
  };

  const fetchFunction = async () => {
    const url = 'https://low-carb-recipes.p.rapidapi.com/random';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '89245b178cmsh939ab8338c9be03p1a7766jsn3eb5ffc0977f',
        'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setlist(data);

      
      showNotification();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const lastFetchDate = localStorage.getItem("lastFetchDate");
    const now = new Date();
    const midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1, // Next day
      0,
      0,
      0,
      0
    );

    // Check if it's a new day or if the website is refreshed
    if (!lastFetchDate || new Date(lastFetchDate) < midnight) {
      fetchFunction();
      localStorage.setItem("lastFetchDate", now.toString());
    }
  }, []); // Run this effect only once when the component mounts

  return (
    <procedurelist.Provider value={{ list, currentDate, setcurrentDate }}>
      {children}
    </procedurelist.Provider>
  );
};

export default ListProvider;
