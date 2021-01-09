import React, { Component } from "react";

class HabitAdd extends Component {
  render() {
    return (
      <form className="habit-form" onSubmit={this.props.addition}>
        <input
          className="input-habit"
          type="text"
          placeholder="Habit"
          ref={this.props.reference}
        ></input>
        <button className="add-btn">Add</button>
      </form>
    );
  }
}

export default HabitAdd;
