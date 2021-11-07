import actionTypes from "../actions/actionTypes";

const robotReducer = (robots = [], action) => {
  let newTaskState = robots;
  switch (action.type) {
    case actionTypes.loadRobotsAction:
      newTaskState = [...action.robots];
      break;
    case actionTypes.createRobotAction:
      newTaskState = [...robots, action.task];
      break;
    case actionTypes.deleteRobotAction:
      newTaskState = robots.filter((robot) => robot.id !== action.id);
      break;

    default:
    // throw new Error("action non existent.");
  }
  console.log("arrived reducer ", newTaskState);
  return newTaskState;
};

export default robotReducer;
