import React, { Component } from 'react';
import uuid from 'uuid';
import { client } from './client';
import { helpers } from './helpers';

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
    this.loadTimersFromServer = this.loadTimersFromServer.bind(this);
  }

  componentDidMount() {
    this.loadTimersFromServer();
    setInterval(this.loadTimersFromServer, 5000);
  }

  loadTimersFromServer() {
    client.getTimers(serverTimers => {
      this.setState({ timers: serverTimers });
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
    const t = helpers.newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t)
    });
    client.createTimer(t);
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
    client.updateTimer(attr);
  }

  deleteTimer(delAttr) {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== delAttr.id)
    });
    client.deleteTimer(delAttr);
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
    client.startTimer({ id: timerId, start: now });
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
    client.stopTimer({ id: timerId, stop: now });
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
