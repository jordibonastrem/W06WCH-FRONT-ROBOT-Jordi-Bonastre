import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRobotsThunk } from "../redux/thunks/Thunks";

const useRobots = () => {
  const dispatch = useDispatch();
  const robots = useSelector((store) => store.robots);
  console.log("arrived customHooke ", robots);

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);
  console.log("arrived customHooke ", robots);
  return {
    robots,
    loadRobots,
  };
};

export default useRobots;
