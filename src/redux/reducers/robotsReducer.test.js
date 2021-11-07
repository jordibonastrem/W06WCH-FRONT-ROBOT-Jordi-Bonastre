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
    });
  });
});
