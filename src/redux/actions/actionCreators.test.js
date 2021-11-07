import { getRandomRobot, getRandomRobots } from "../../factories/robotsFactory";
import {
  loadRobotsAction,
  createRobotAction,
  deleteRobotAction,
  updateRobotAction,
} from "./actionCreators";

import actionTypes from "./actionTypes";

describe("Given a load actionCreator", () => {
  describe("When it receives a list of robots", () => {
    test("Then it should return a load type action with the robots recieved", () => {
      const robotsList = getRandomRobots();
      const expectedAction = {
        type: actionTypes.loadRobotsAction,
        robots: robotsList,
      };

      const actionResult = loadRobotsAction(robotsList);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given a create actionCreator", () => {
  describe("When it receives a robot", () => {
    test("Then it should return a create type action with the robot recieved", () => {
      const newRobot = getRandomRobot();
      const expectedAction = {
        type: actionTypes.createRobotAction,
        robot: newRobot,
      };

      const actionResult = createRobotAction(newRobot);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given a update actionCreator", () => {
  describe("When it receives a robot", () => {
    test("Then it should return a update type action with the robot recieved", () => {
      const modifiedRobot = getRandomRobot();
      const expectedAction = {
        type: actionTypes.updateRobotAction,
        robot: modifiedRobot,
      };

      const actionResult = updateRobotAction(modifiedRobot);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
