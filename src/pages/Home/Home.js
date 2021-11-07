import RobotsList from "../../components/RobotList/RobotsList";
import useRobots from "../../hooks/useRobots";
import { useEffect } from "react";
import Form from "../../components/Form/Form";
import "./Home.css";

const Home = () => {
  const { robots, loadRobots } = useRobots();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return (
    <>
      <h1 className="title">ROBOTS</h1>
      <Form></Form>
      <RobotsList robots={robots}></RobotsList>)
    </>
  );
};

export default Home;
