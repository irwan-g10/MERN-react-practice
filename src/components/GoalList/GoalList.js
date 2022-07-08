import React from "react";
import "./GoalList.css";

const GoalList = (props) => {
  //   console.log(props.goals);
  return (
    <ul className="goal-list">
      {props.goals.map((el) => {
        return <li key={el.id}>{el.text}</li>;
      })}
    </ul>
  );
};

export default GoalList;
