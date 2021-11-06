import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRobotsThunk } from "../redux/thunks/Thunks";

const useRobots = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.tasks);

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return {
    tasks,
    loadRobots,
  };
};

export default useRobots;
