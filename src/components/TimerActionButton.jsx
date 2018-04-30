import React, { Component } from 'react';

export default class TimerActionButton extends Component {
  render() {
    if (this.props.timerIsRunning) {
      return (
        <button className="timer-button red" onClick={this.props.onStopClick}>
          Stop
        </button>
      );
    } else {
      return <button className="timer-button green" onClick={this.props.onStartClick}>
          Start
        </button>;
    }
  }
}
