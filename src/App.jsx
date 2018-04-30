import React, { Component } from 'react';
import uuid from 'uuid';
import { newTimer } from './helpers.js';
import { getTimers } from './client';

import EditableTimerList from './components/EditableTimerList';
import ToggleableTimerForm from './components/ToggleableTimerForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      timers: []
    };

    this.handleCreateFormSubmit = this.handleCreateFormSubmit.bind(this);
    this.handleUpdateFormSubmit = this.handleUpdateFormSubmit.bind(this);
    this.handleDeleteTimer = this.handleDeleteTimer.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
  }

  componentDidMount() {
    getTimers(serverTimers => {
      this.setState({
        timers: serverTimers
      })
    });
  }

  handleCreateFormSubmit(timer) {
    this.createTimer(timer);
  }

  handleUpdateFormSubmit(attr) {
    this.updateTimer(attr);
  }

  handleDeleteTimer(delAttr) {
    this.deleteTimer(delAttr);
  }

  createTimer(timer) {
    const t = newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t)
    });
  }

  updateTimer(attr) {
    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === attr.id) {
          return Object.assign({}, timer, {
            title: attr.title,
            project: attr.project
          });
        } else {
          return timer;
        }
      })
    });
  }

  deleteTimer(delAttr) {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== delAttr.id)
    });
  }

  handleStartClick(timerId) {
    this.startTimer(timerId);
  }

  handleStopClick(timerId) {
    this.stopTimer(timerId);
  }

  startTimer(timerId) {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === timerId) {
          return Object.assign({}, timer, {
            runningSince: now
          });
        } else {
          return timer;
        }
      })
    });
  }

  stopTimer(timerId) {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null
          });
        } else {
          return timer;
        }
      })
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div />
        <div className="dashboard">
          <EditableTimerList
            timers={this.state.timers}
            onFormSubmit={this.handleUpdateFormSubmit}
            onTimerDelete={this.handleDeleteTimer}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}
          />
          <ToggleableTimerForm
            isOpen={true}
            onFormSubmit={this.handleCreateFormSubmit}
          />
        </div>
        <div />
      </div>
    );
  }
}

export default App;
