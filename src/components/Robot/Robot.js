import React from "react";

import "./Robot.css";

const Robot = ({ name, image, caracteristics }) => {
  return (
    <div className="card mycard">
      <img className="card-img-top" src={image} alt="robot"></img>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">VELOCITY:{caracteristics.velocity}</p>
        <p className="card-text">RESISTENCE:{caracteristics.resistence}</p>
        <p className="card-text">
          DATE OF CREATION:{caracteristics.dateOfCreation}
        </p>
        {/* <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </div>
  );
};

export default Robot;
