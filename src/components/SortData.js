import React from "react";

import "./../App.css";

const SortData = (props) => {
  const { gender, pets } = props;

  const sortedCats = (pets) => {
    const getCats = [];
    for (let pet in pets) {
      if (pets[pet].type.toLowerCase() === "cat") {
        getCats.push(pets[pet].name);
      }
    }

    return getCats
      .sort((catNameA, catNameB) => catNameA.localeCompare(catNameB))
      .map((catName) => <div> {catName} </div>);
  };

  return (
    <div>
      <h2> {pets !== null ? gender : null} </h2>
      <div> {sortedCats(pets)} </div>
    </div>
  );
};

export default SortData;
