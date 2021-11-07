import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRobotsThunk } from "../redux/thunks/Thunks";

const useRobots = () => {
  const dispatch = useDispatch();
  const robots = useSelector((store) => store.robots);
  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);
  console.log("custom hooke robots");
  console.log(robots);
  return {
    robots,
    loadRobots,
  };
};

export default useRobots;
