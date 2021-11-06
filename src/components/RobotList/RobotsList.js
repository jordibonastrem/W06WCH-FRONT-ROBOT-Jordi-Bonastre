import React from "react";

import Robot from "../Robot/Robot";
import "./RobotsList.css";

const RobotsList = ({ robots }) => {
  return (
    <div className="list">
      <h2>Robots List</h2>
      <ul>
        {robots.map(
          ({
            id,
            name,
            image,
            caracteristics: { velocity, resistence, dateOfCreation },
          }) => {
            return (
              <Robot
                key={id}
                name={name}
                image={image}
                velocity={velocity}
                resistence={resistence}
                dateOfCreation={dateOfCreation}
              ></Robot>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default RobotsList;
