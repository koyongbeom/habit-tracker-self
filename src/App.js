import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Habits from "./components/habits";
import { faRunning } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  state = {
    habits: [
      { name: "Reading", count: 0, id: 1 },
      { name: "Running", count: 0, id: 2 },
      { name: "Coding", count: 0, id: 3 },
    ],
    headercount: 0,
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

  render() {
    return (
      <div>
        <div class="header">
          <i class="fas fa-leaf fa-2x"></i>
          <span class="header-text">Habit Tracker</span>
          <span class="header-count">{this.state.headercount}</span>
        </div>
        <div>
          {this.state.habits.map((habit) => (
            <Habits
              habit={habit}
              increment={this.countUp}
              decrement={this.countDown}
              delete={this.trash}
              key={habit.id}
            ></Habits>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
