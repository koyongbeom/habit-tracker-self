import React, { Component } from "react";

class Habit extends Component {
  countUp = () => {
    this.props.increment(this.props.habit);
  };

  countDown = () => {
    this.props.decrement(this.props.habit);
  };

  trash = () => {
    this.props.delete(this.props.habit);
  };

  render() {
    return (
      <div>
        <div className="habit">
          <span className="habit-text">{this.props.habit.name}</span>
          <span className="habit-count">{this.props.habit.count}</span>
          <button className="button button-plus" onClick={this.countUp}>
            <i className="fas fa-plus-square fa-3x"></i>
          </button>
          <button className="button button-minus" onClick={this.countDown}>
            <i className="fas fa-minus-square fa-3x"></i>
          </button>
          <button className="button button-trash fa-2x" onClick={this.trash}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Habit;
