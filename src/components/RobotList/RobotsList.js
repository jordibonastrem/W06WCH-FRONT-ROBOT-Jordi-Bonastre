import React from "react";

import Robot from "../Robot/Robot";
import "./RobotsList.css";

const RobotsList = ({ robots }) => {
  return (
    <div className="list">
      <h2>Robots List</h2>
      <ul>
        {robots.map((robot) => {
          return <Robot key={robot._id} robot={robot}></Robot>;
          // console.log(robot._id, robot);
        })}
      </ul>
    </div>
  );
};

export default RobotsList;
