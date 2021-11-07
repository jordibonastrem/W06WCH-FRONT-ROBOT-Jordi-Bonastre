import React from "react";

import Robot from "../Robot/Robot";
import "./RobotsList.css";
import useRobots from "../../hooks/useRobots";

const RobotsList = ({ robots }) => {
  const { deleteRobot } = useRobots();

  const handleOnclick = (id) => {
    const robotToDelete = robots.find((robot) => robot._id === id);
    deleteRobot(robotToDelete);
  };
  return (
    <div>
      <ul className="container-card">
        {robots.map((robot) => {
          return (
            <Robot
              key={robot._id}
              robot={robot}
              actionOnClick={() => handleOnclick(robot._id)}
            ></Robot>
          );
        })}
      </ul>
    </div>
  );
};

export default RobotsList;
