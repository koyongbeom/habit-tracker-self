import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Habits from "./components/habits";
import { faRunning } from "@fortawesome/free-solid-svg-icons";
import Habit from "./components/habit";
import Headerbar from "./components/headerbar";

class App extends Component {
  state = {
    habits: [
      { name: "Reading", count: 0, id: 1 },
      { name: "Running", count: 0, id: 2 },
      { name: "Coding", count: 0, id: 3 },
    ],
    headercount: 0,
  };

  plusHabit = (extraHabitName) => {
    const habits = [...this.state.habits];
    const extraHabit = {
      name: extraHabitName,
      count: 0,
      id: this.state.habits.length + 1,
    };
    habits.push(extraHabit);
    this.setState({ habits: habits });
  };

  countUp = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    let headercount = this.state.headercount;
    headercount++;
    this.setState({ habits: habits, headercount: headercount });
  };

  countDown = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    if (habits[index].count > 0) {
      habits[index].count--;
      let headercount = this.state.headercount;
      headercount--;
      this.setState({ habits: habits, headercount: headercount });
    }
  };

  trash = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    let headercount = this.state.headercount;
    headercount = headercount - habits[index].count;
    habits.splice(index, 1);
    this.setState({ habits: habits, headercount: headercount });
  };

  resetAll = () => {
    const habits = [];
    this.setState({ habits: habits, headercount: 0 });
  };

  render() {
    return (
      <div>
        <Headerbar
          headercount={
            this.state.habits.filter((item) => item.count > 0).length
          }
        ></Headerbar>
        <div>
          <Habits
            habits={this.state.habits}
            addition={this.plusHabit}
            increment={this.countUp}
            decrement={this.countDown}
            delete={this.trash}
          ></Habits>
        </div>
        <div className="reset-div">
          <button className="reset-btn" onClick={this.resetAll}>
            Reset All
          </button>
        </div>
      </div>
    );
  }
}

export default App;
