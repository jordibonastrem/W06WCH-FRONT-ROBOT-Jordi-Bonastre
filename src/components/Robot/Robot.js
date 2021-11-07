import React from "react";

import "./Robot.css";

const Robot = ({
  robot: {
    name,
    img,
    caracteristics: { velocity, resistence, dateOfCreation },
  },
  actionOnClick,
}) => {
  return (
    <div className="card mycard">
      <img className="card-img-top" src={img} alt="robot"></img>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">VELOCITY:{velocity}</p>
        <p className="card-text">RESISTENCE:{resistence}</p>
        <p className="card-text">DATE OF CREATION:{dateOfCreation}</p>
        <button className="btn btn-danger" onClick={actionOnClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Robot;
