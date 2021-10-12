import React from "react";

// import "./CircleCounter.css";

const CircleCounter = (props) => {
  return (
    <div className="CircleCounter">
      I'm a Circle Counter:
      <br></br>
      {props.numberOfTimesUpdated}
      <br></br>
      of
      <br></br>
      {props.numberOfTimesGoal}
    </div>
  );
};

export default CircleCounter;
