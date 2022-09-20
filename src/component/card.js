import React from "react";

const Card = ({name , temp , temp_min , temp_max}) => {

  return (
    <div className="card text-white bg-dark mb-3">
      <div className="card-header">{name}</div>
      <div className="card-body">
        <p className="card-text">Temperature : {temp} </p>
        <p className="card-text"> Minimum temperature : {temp_min} </p>
        <p className="card-text">Maximum temperature : {temp_max} </p>
        <p>feels like</p>
        <p>wind speed</p>
        <p>description</p>
        <p>main</p>
      </div>
    </div>
  );
};

export default Card;
