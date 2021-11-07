import { getRandomRobot, getRandomRobots } from "../../factories/robotsFactory";
import actionTypes from "../actions/actionTypes";
import robotReducer from "./robotsReducer";

describe("Given a robotsReducer reducer", () => {
  describe("When it receives an empty robots list and a load action with three robots", () => {
    test("Then it should return a new robot list with the three robots received", () => {
      const initialRobots = [];
      const robotsList = getRandomRobots(3);
      const action = {
        type: actionTypes.loadRobotsAction,
        robots: robotsList,
      };

      const newList = robotReducer(initialRobots, action);

      expect(newList).toEqual(robotsList);
    });
  });
  describe("When it receives an empty robots list and a create action with three robots", () => {
    test("Then it should return a new robot list including the new robot", () => {
      const initialRobots = getRandomRobots(3);
      const newRobot = getRandomRobot();
      const action = {
        type: actionTypes.createRobotAction,
        robot: newRobot,
      };

      const newList = robotReducer(initialRobots, action);

      expect(newList).toContainEqual(newRobot);
    });
  });

  describe("When it receives a robots list and a delete action with an id", () => {
    test("Then it should return a new robots list without the robot received", () => {
      const initialRobots = getRandomRobots(3);
      const robotToDelete = initialRobots[0];
      const action = {
        type: actionTypes.deleteRobotAction,
        id: robotToDelete._id,
      };

      const newList = robotReducer(initialRobots, action);

      expect(newList).not.toContainEqual(robotToDelete);
    });
  });
});
