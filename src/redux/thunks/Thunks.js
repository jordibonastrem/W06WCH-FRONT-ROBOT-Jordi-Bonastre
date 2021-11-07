import { loadRobotsAction } from "../actions/actionCreators";

export const loadRobotsThunk = () => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);

  const robots = await response.json();
  robots.forEach((robots) => console.log(robots));

  dispatch(loadRobotsAction(robots));
};
