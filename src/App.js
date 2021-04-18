import React, { useState, useEffect } from "react";
import SortData from "./SortData";

import "./App.css";

const API_URL =
  "https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json";

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const fetchData = () => {
    // This setTimeout exists to show the loading indicator
    setTimeout(
      async () =>
        await fetch(API_URL)
          .then((res) => (res.text !== "" ? res.json() : {}))
          .then((data) => {
            setLoading(false);
            return setUserData(data);
          })
          .catch((err) => console.log("Error in fetching", err)),

      2000
    );
  };

  if (loading === true) {
    return <p className = "App">Loading...</p>;
  } else if (userData === null) {
    return null;
  }

  const ownersSortedPets = [...userData];

  return (
    <>
   
      <h1 className = "App"> Sorted Cats </h1>     
      <div className = "Owners">
        {ownersSortedPets.map((user) => (
        <SortData key={user.index} {...user} />
      ))}
      </div>
      
    </>
  );
}

export default App;
