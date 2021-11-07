import actionTypes from "../actions/actionTypes";

const robotReducer = (robots = [], action) => {
  let newRobotsState = robots;
  switch (action.type) {
    case actionTypes.loadRobotsAction:
      newRobotsState = [...action.robots];
      break;
    case actionTypes.createRobotAction:
      newRobotsState = [...robots, action.robot];
      break;
    case actionTypes.deleteRobotAction:
      newRobotsState = robots.filter((robot) => robot._id !== action.id);
      break;

    default:
  }
  return newRobotsState;
};

export default robotReducer;
