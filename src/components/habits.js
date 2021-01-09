import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  countUp = (habit) => {
    this.props.increment(habit);
  };

  countDown = (habit) => {
    this.props.decrement(habit);
  };

  trash = (habit) => {
    this.props.delete(habit);
  };

  render() {
    return (
      <div>
        {this.props.habits.map((habit) => (
          <Habit
            habit={habit}
            increment={this.countUp}
            decrement={this.countDown}
            delete={this.trash}
            key={habit.id}
          ></Habit>
        ))}
      </div>
    );
  }
}

export default Habits;
