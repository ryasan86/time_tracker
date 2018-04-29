import React, { Component } from 'react';
import { renderElapsedString } from './../helpers';

export default class Timer extends Component {
  render() {
    const elapsedString = renderElapsedString(this.props.elapsed);
    return (
      <div className="card">
        <div className="content">
          <div className="header">{this.props.title}</div>
          <div className="meta">{this.props.project}</div>
          <div align="center">
            <h2>{elapsedString}</h2>
          </div>
          <div className="icon-row">
            <span>&#128465;</span>
            <span>&#9998;</span>
          </div>
        </div>
        <button className="timer-button green">Start</button>
      </div>
    );
  }
}
