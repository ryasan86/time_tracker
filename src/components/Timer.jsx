import React, { Component } from 'react';
import { renderElapsedString } from './../helpers';

export default class Timer extends Component {
  constructor() {
    super();
  }

  render() {
    const { title, project, elapsed, onTimerDelete, onEditClick } = this.props;
    const elapsedString = renderElapsedString(elapsed);

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
        <button className="timer-button green">Start</button>
      </div>
    );
  }
}
