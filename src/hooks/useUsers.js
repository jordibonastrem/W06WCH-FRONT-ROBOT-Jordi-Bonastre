import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../redux/thunks/UsersThunks";

const useUsers = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store);

  const loginUser = useCallback(
    (user) => {
      dispatch(loginThunk(user));
    },
    [dispatch]
  );
  return {
    user,
    loginUser,
  };
};

export default useUsers;
