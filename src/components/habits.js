import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { name: "Reading", count: 0, id: 1 },
      { name: "Running", count: 0, id: 2 },
      { name: "Coding", count: 0, id: 3 },
    ],
  };

  countUp = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState(habits);
  };

  countDown = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    if (habits[index].count > 0) {
      habits[index].count--;
      this.setState(habits);
    }
  };

  trash = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits.splice(index, 1);
    this.setState({ habits: habits });
  };

  render() {
    return (
      <div>
        {this.state.habits.map((habit) => (
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
