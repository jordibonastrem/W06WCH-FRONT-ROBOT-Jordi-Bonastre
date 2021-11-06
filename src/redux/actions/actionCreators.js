import actionTypes from "./actionTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const createRobotAction = (robot) => ({
  type: actionTypes.createRobotAction,
  robot,
});

export const deleteRobotAction = (id) => ({
  type: actionTypes.deleteRobotAction,
  id,
});

export const updateRobotAction = (robot) => ({
  type: actionTypes.updateRobotAction,
  robot,
});
