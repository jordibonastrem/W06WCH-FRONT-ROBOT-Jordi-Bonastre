import { loadRobotsAction, deleteRobotAction } from "../actions/actionCreators";

export const loadRobotsThunk = () => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);

  const robots = await response.json();
  dispatch(loadRobotsAction(robots));
};

export const deleteRobotsThunk = (id) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/delete/${id}`,
    {
      method: "DELETE",
    }
  );
  if (response.ok) {
    dispatch(deleteRobotAction(id));
  }
};
