import RobotsList from "../../components/RobotList/RobotsList";
import useRobots from "../../hooks/useRobots";
import { useEffect } from "react";

const Home = () => {
  const { robots, loadRobots } = useRobots();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);
  console.log(robots);
  // // return <div>ffd</div>;
  return <RobotsList robots={robots}></RobotsList>;
};

export default Home;
