import React from "react";

import Robot from "../Robot/Robot";
import "./RobotsList.css";

const RobotsList = ({ robots }) => {
  return (
    <div className="list">
      <h2>Robots List</h2>
      <ul>
        {/* {robots.map(({ _id, name, img, caracteristics }) => {
          console.log({ caracteristics });
          // const velocity = caracteristics.velocity;
          // console.log(_id, name, img, velocity);
        })} */}
        {robots.map(({ _id, name, img, caracteristics }) => {
          return (
            <Robot
              key={_id}
              name={name}
              image={img}
              caracteristics={caracteristics}
            ></Robot>
          );
        })}
      </ul>
    </div>
  );
};

export default RobotsList;
