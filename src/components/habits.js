import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habit: [
      { name: "Reading", count: 0 },
      { name: "Running", count: 0 },
      { name: "Coding", count: 0 },
    ],
  };

  render() {
    return (
      <div>
        {this.state.habit.map((habit) => (
          <Habit habit={habit}></Habit>
        ))}
      </div>
    );
  }
}

export default Habits;
