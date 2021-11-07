import { useState, useEffect } from "react";
import "./Form.css";
import useRobots from "../../hooks/useRobots";

const Form = () => {
  const initialData = {
    name: "",
    img: "",
    caracteristics: {
      velocity: "",
      resistence: "",
      dateOfCreation: "",
    },
  };
  const [robotData, setRobotData] = useState(initialData);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { createRobot } = useRobots();

  useEffect(() => {
    setButtonDisabled(
      robotData.name === "" || robotData.caracteristics.dateOfCreation === ""
    );
  }, [robotData.caracteristics.dateOfCreation, robotData.name]);
  const changeData = (event) => {
    if (
      event.target.id === "velocity" ||
      event.target.id === "resistence" ||
      event.target.id === "dateOfCreation"
    ) {
      setRobotData({
        ...robotData,
        caracteristics: {
          ...robotData.caracteristics,
          [event.target.id]: event.target.value,
        },
      });
    } else {
      setRobotData({
        ...robotData,
        [event.target.id]: event.target.value,
      });
    }
  };

  const resetForm = () => {
    setRobotData(initialData);
  };

  const onCreateRobot = (event) => {
    event.preventDefault();
    putPlaceHolderDataIfNull();
    createRobot(robotData);
    resetForm();
  };

  const putPlaceHolderDataIfNull = () => {
    if (robotData.img === "") {
      robotData.img =
        "https://ih1.redbubble.net/image.101121317.0149/pp,504x498-pad,600x600,f8f8f8.jpg";
    }
    if (robotData.caracteristics.velocity === "") {
      robotData.caracteristics.velocity = 1;
    }
    if (robotData.caracteristics.resistence === "") {
      robotData.caracteristics.resistence = 1;
    }
  };

  return (
    <div className="form-style">
      <form onSubmit={onCreateRobot}>
        <div className="form-group">
          <label htmlFor="name">Robot Name</label>
          <input
            type="name"
            className="form-control"
            id="name"
            value={robotData.name}
            placeholder="Enter Robot name"
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="img">Enter image link</label>
          <input
            type="text"
            className="form-control"
            id="img"
            value={robotData.img}
            placeholder="Enter image link"
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="velocity">Velocity</label>
          <select
            className="form-control"
            id="velocity"
            value={robotData.caracteristics.velocity}
            onChange={changeData}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="resistence">Resistence</label>
          <select
            className="form-control"
            id="resistence"
            value={robotData.caracteristics.resistence}
            onChange={changeData}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>

        <label htmlFor="dateOfCreation">Creation date:</label>
        <input
          onChange={changeData}
          type="date"
          className="form-control form-control-sm"
          id="dateOfCreation"
          placeholder="Creation date"
          value={robotData.caracteristics.dateOfCreation}
        ></input>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={buttonDisabled}
        >
          Create Robot
        </button>
      </form>
    </div>
  );
};

export default Form;
