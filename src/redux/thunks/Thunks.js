import { loadRobotAction } from "../actions/actionCreators";

export const loadRobotsThunk = () => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);

  const tasks = await response.json();

  dispatch(loadRobotAction(tasks));
};
