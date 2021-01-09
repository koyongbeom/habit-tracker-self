import React, { Component } from "react";
import Habit from "./habit";
import HabitAdd from "./habitAdd";

class Habits extends Component {
  inputHabitRef = React.createRef();

  countUp = (habit) => {
    this.props.increment(habit);
  };

  countDown = (habit) => {
    this.props.decrement(habit);
  };

  trash = (habit) => {
    this.props.delete(habit);
  };

  plusHabit = (event) => {
    event.preventDefault();
    this.props.addition(this.inputHabitRef.current.value);
  };

  render() {
    return (
      <div>
        <HabitAdd
          addition={this.plusHabit}
          reference={this.inputHabitRef}
        ></HabitAdd>
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
