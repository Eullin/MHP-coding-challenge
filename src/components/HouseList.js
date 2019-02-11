import React from "react";
import HouseItem from "./HouseItem";

const HouseList = ({ houses, onHouseSelect }) => {
  const renderedList = houses.map(house => {
    return (
      <HouseItem key={houses.name} onHouseSelect={onHouseSelect} house={house} />
    );
  });
  return (
    <div className="list-container">
      <h3 style={{ color: "grey" }}> Total: {houses.length}</h3>
      <div className="list-scroll">
        <div />
        <div style={{ cursor: "pointer" }} className="ui relaxed list">
          {renderedList}
        </div>
      </div>
    </div>
  );
};

export default HouseList;
