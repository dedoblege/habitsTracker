import React, { useState, useEffect } from "react";
import CircleCounter from "../UI/CircleCounter/CircleCounter";
import { Chart } from "react-google-charts";

import "./Activity.css";

const Activity = (props) => {
  const activityTitle = useState(props.title).toString();
  const activityPercentage = parseInt(useState(props.percentage));
  const inactivityPercentage = parseInt(100 - activityPercentage);
  const chartData = [
    ["Activity", "Percentage"],
    [activityTitle, activityPercentage],
    ["inactivity", inactivityPercentage],
  ];

  useEffect(() => {}, []);

  const editDetails = () => {};

  return (
    <div className="Activity" onClick={editDetails}>
      <div className="activity-title">{props.title}</div>
      {props.percentage && (
        <div className="activity-chart">
          <Chart
            width={"25vw"}
            height={"15vh"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={chartData}
            options={{
              legend: "none",
              colors: ["#00a08f", "#124653"],
            }}
            rootProps={{ "data-testid": "1" }}
          />
        </div>
      )}
      {props.numberOfTimesUpdated && (
        <div className="activity-numberOfTimes">
        {/* checkbox */}
          <CircleCounter
            numberOfTimesGoal={props.numberOfTimesGoal}
            numberOfTimesUpdated={props.numberOfTimesUpdated}
          />
        </div>
      )}
    </div>
  );
};

export default Activity;
