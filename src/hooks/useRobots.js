import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadRobotsThunk,
  deleteRobotsThunk,
  createRobotThunk,
} from "../redux/thunks/Thunks";

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
