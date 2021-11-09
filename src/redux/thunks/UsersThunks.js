import jwtDecode from "jwt-decode";
import axios from "axios";

import { userLoginAction } from "../actions/actionCreators";

export const LoginUserThunk = (user) => async (dispatch) => {
  const {data,status} = await axios.post(process.env.REACT_APP_API_URL_LOGIN, user);
};
