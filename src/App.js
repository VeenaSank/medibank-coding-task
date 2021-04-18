import React from "react";
import SortData from "./components/SortData";
import { useUserFetcher } from "./components/useUserFetcher";

import "./App.css";

function App() {
  const [loading, ownersSortedPets, error] = useUserFetcher();

  if (loading === true) {
    return <p className="App">Loading...</p>;
  } else if (ownersSortedPets === null || error) {
    return null;
  }

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
