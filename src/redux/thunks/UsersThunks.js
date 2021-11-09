import jwtDecode from "jwt-decode";
import axios from "axios";

import { loginUserAction } from "../actions/actionCreators";

export const loginThunk = (user) => async (dispatch) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL_LOGIN}/login`,
    user
  );

  if (response.status === 200) {
    const token = response.data.token;
    const user = jwtDecode(token);
    dispatch(loginUserAction(user));
    localStorage.setItem("user", JSON.stringify({ token: token }));
  }
};
