import React, { Component } from 'react';
import { helpers } from './../helpers';

import TimerActionButton from './TimerActionButton';

export default class Timer extends Component {
  constructor() {
    super();
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
  }

  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }

  handleStartClick() {
    this.props.onStartClick(this.props.id);
  }

  handleStopClick() {
    this.props.onStopClick(this.props.id);
  }

  render() {
    const {
      title,
      project,
      elapsed,
      runningSince,
      onTimerDelete,
      onEditClick
    } = this.props;
    const elapsedString = helpers.renderElapsedString(elapsed, runningSince);

    return (
      <div className="card">
        <div className="content">
          <div className="header">{title}</div>
          <div className="meta">{project}</div>
          <div align="center">
            <h2>{elapsedString}</h2>
          </div>
          <div className="icon-row">
            <span onClick={onTimerDelete}>&#128465;</span>
            <span onClick={onEditClick}>&#9998;</span>
          </div>
        </div>
        <TimerActionButton
          timerIsRunning={!!runningSince}
          onStartClick={this.handleStartClick}
          onStopClick={this.handleStopClick}
        />
      </div>
    );
  }
}
