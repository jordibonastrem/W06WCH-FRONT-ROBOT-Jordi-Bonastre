import { useState } from "react";
import "./Form.css";
import useRobots from "../../hooks/useRobots";
const Form = () => {
  const initialData = {
    name: "",
    image: "",
    caracteristics: {
      velocity: "",
      resistence: "",
      date: "",
    },
  };
  const [robotData, setRobotData] = useState(initialData);

  return (
    <form>
      <div class="form-group">
        <label for="name">Robot Name</label>
        <input
          type="name"
          class="form-control"
          id="name"
          placeholder="Enter Robot name"
        />
      </div>
      <div class="form-group">
        <label for="image">Robot Name</label>
        <input
          type="text"
          class="form-control"
          id="image"
          placeholder="Enter image link"
        />
      </div>
      <div class="form-group">
        <label for="velocity">Velocity</label>
        <select class="form-control" id="velocity">
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
      <div class="form-group">
        <label for="resistence">Velocity</label>
        <select class="form-control" id="resistence">
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

      <label for="date">Creation date:</label>
      <input
        type="date"
        class="form-control form-control-sm"
        id="date"
        placeholder="Creation date"
        value=""
      ></input>
      <button type="submit" class="btn btn-primary">
        Create Robot
      </button>
    </form>
  );
};

export default Form;
