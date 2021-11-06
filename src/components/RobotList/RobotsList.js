import { image } from "faker";
import React from "react";

import Robot from "../Robot/Robot";

const RobotList = ({ robots }) => {
  return (
    <div>
      <h2>Robots List</h2>
      <ul>
        {robots.map(
          ({
            name,
            image,
            caracteristics: { velocity, resistence, dateOfCreation },
          }) => {
            return (
              <Robot
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
