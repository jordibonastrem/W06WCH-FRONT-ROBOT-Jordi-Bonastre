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
        type: actionTypes.loadRobots,
        robots: robotsList,
      };

      const actionResult = loadRobotsAction(robotsList);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
