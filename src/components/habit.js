import React, { Component } from "react";

class Habit extends Component {
  render() {
    return (
      <div>
        <div className="habit">
          <span className="habit-text">{this.props.habit.name}</span>
          <span className="habit-count">{this.props.habit.count}</span>
          <button className="button button-plus">
            <i className="fas fa-plus-square fa-3x"></i>
          </button>
          <button className="button button-minus">
            <i className="fas fa-minus-square fa-3x"></i>
          </button>
          <button className="button button-trash fa-2x">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Habit;
