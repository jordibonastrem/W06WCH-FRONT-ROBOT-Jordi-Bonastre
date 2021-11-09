import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadRobotsThunk,
  deleteRobotsThunk,
  createRobotThunk,
} from "../redux/thunks/RobotsThunks";

const useRobots = () => {
  const dispatch = useDispatch();
  const robots = useSelector((store) => store.robots);

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  const deleteRobot = (robot) => {
    dispatch(deleteRobotsThunk(robot._id));
  };

  const createRobot = (robot) => {
    dispatch(createRobotThunk(robot));
  };
  return {
    robots,
    loadRobots,
    deleteRobot,
    createRobot,
  };
};

export default useRobots;
