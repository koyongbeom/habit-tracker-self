import React, { Component } from "react";

class Headerbar extends Component {
  render() {
    return (
      <header className="header">
        <i className="fas fa-leaf fa-2x"></i>
        <span className="header-text">Habit Tracker</span>
        <span className="header-count">{this.props.headercount}</span>
      </header>
    );
  }
}

export default Headerbar;
