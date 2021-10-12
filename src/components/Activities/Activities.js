import React, { useEffect } from "react";
import Activity from "../Activity/Activity";

import "./Activities.css";

const Activities = () => {
  useEffect(() => {}, []);

  return (
    <div className="Activities">
      <div className="activities-title">Activities</div>
      <div className="activities-body">
        <Activity
          title="Running"
          numberOfTimesGoal="3"
          numberOfTimesUpdated="2"
          percentage="60"
        ></Activity>
      </div>
    </div>
  );
};

export default Activities;
