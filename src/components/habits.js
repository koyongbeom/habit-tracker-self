import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  render() {
    return (
      <div>
        {
          <Habit
            habit={this.props.habit}
            increment={this.props.increment}
            decrement={this.props.decrement}
            delete={this.props.delete}
            key={this.props.key}
          ></Habit>
        }
      </div>
    );
  }
}

export default Habits;
