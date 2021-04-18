import React from "react";
import SortData from "./SortData";
import { useUserFetcher } from "./useUserFetcher";

import "./App.css";

function App() {
  const [loading, userData, error] = useUserFetcher();

  if (loading === true) {
    return <p className="App">Loading...</p>;
  } else if (userData === null) {
    return null;
  }

  const ownersSortedPets = [...userData];

  return (
    <>
      <h1 className="App"> Sorted Cats </h1>
      <div className="Owners">
        {ownersSortedPets.map((user, index) => (
          <SortData key={user.name} {...user} />
        ))}
      </div>
    </>
  );
}

export default App;
