import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRobotsThunk, deleteRobotsThunk } from "../redux/thunks/Thunks";

const useRobots = () => {
  const dispatch = useDispatch();
  const robots = useSelector((store) => store.robots);

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  const deleteRobot = (robot) => {
    console.log(robot._id);
    dispatch(deleteRobotsThunk(robot._id));
  };
  return {
    robots,
    loadRobots,
    deleteRobot,
  };
};

export default useRobots;
