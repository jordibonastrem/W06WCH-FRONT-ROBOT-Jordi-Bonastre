import React from "react";

import ".Robot.css";

const Robot = ({
  name,
  imgSrc,
  caracteristics: { velocity, resistence, dateOfCreation },
}) => {
  return (
    <div class="card mycard">
      <img class="card-img-top" src={imgSrc} alt="robot"></img>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">VELOCITY:{velocity}</p>
        <p class="card-text">RESISTENCE:{resistence}</p>
        <p class="card-text">DATE OF CREATION:{dateOfCreation}</p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Robot;
