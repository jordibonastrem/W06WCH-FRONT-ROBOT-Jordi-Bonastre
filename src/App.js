import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RobotsList from "./components/RobotList/RobotsList";

const robots = [
  {
    name: "Sophia",
    image:
      "https://grupoadd.es/wp-content/uploads/2019/08/Robot-Sophia-3-Grupo-ADD.jpg",
    caracteristics: {
      velocity: 1,
      resistence: 3,
      dateOfCreation: "2021-05-10T22:00:00.000+00:00",
    },
  },
  {
    name: "Sophia",
    image:
      "https://grupoadd.es/wp-content/uploads/2019/08/Robot-Sophia-3-Grupo-ADD.jpg",
    caracteristics: {
      velocity: 1,
      resistence: 3,
      dateOfCreation: "2021-05-10T22:00:00.000+00:00",
    },
  },
  {
    name: "Sophia",
    image:
      "https://grupoadd.es/wp-content/uploads/2019/08/Robot-Sophia-3-Grupo-ADD.jpg",
    caracteristics: {
      velocity: 1,
      resistence: 3,
      dateOfCreation: "2021-05-10T22:00:00.000+00:00",
    },
  },
  {
    name: "Sophia",
    image:
      "https://grupoadd.es/wp-content/uploads/2019/08/Robot-Sophia-3-Grupo-ADD.jpg",
    caracteristics: {
      velocity: 1,
      resistence: 3,
      dateOfCreation: "2021-05-10T22:00:00.000+00:00",
    },
  },
  {
    name: "Sophia",
    image:
      "https://grupoadd.es/wp-content/uploads/2019/08/Robot-Sophia-3-Grupo-ADD.jpg",
    caracteristics: {
      velocity: 1,
      resistence: 3,
      dateOfCreation: "2021-05-10T22:00:00.000+00:00",
    },
  },
  {
    name: "Sophia",
    image:
      "https://grupoadd.es/wp-content/uploads/2019/08/Robot-Sophia-3-Grupo-ADD.jpg",
    caracteristics: {
      velocity: 1,
      resistence: 3,
      dateOfCreation: "2021-05-10T22:00:00.000+00:00",
    },
  },
  {
    name: "Sophia",
    image:
      "https://grupoadd.es/wp-content/uploads/2019/08/Robot-Sophia-3-Grupo-ADD.jpg",
    caracteristics: {
      velocity: 1,
      resistence: 3,
      dateOfCreation: "2021-05-10T22:00:00.000+00:00",
    },
  },
];
function App() {
  return <RobotsList robots={robots}></RobotsList>;
}

export default App;
