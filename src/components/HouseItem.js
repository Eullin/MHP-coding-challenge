import React from "react";


const HouseItem = ({ house, onHouseSelect }) => {
  return (
    <div onClick={() => onHouseSelect(house)} className="item">
      <h3>{house.name}</h3>
    </div>
  );
};

export default HouseItem;
