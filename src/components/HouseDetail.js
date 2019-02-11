import React from "react";

const HouseDetail = ({ house }) => {
  if (!house) {
    return (
      <div className="house-detail">
        <h1>Select a house</h1>
      </div>
    );
  }
  return (
    <div className="detail-container">
      <div className="ui segment">
        <table>
          <tbody>
            <tr>
              <th className="header">Name:</th>
              <td className="description">{house.name}</td>
            </tr>
            <tr>
              <th className="header">Region:</th>
              <td className="description">{house.region}</td>
            </tr>
            {house.words !== "" && (
              <tr>
                <th className="header">Words:</th>
                <td className="description">{house.words}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HouseDetail;
