import actionTypes from "./actionTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobotsAction,
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

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});

export const logoutUserAction = (user) => ({
  type: actionTypes.logoutUser,
  user,
});

export const userIsLoggedAction = (user) => ({
  type: actionTypes.userIsLogged,
  user,
});
