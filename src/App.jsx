import React, { Component } from 'react';
import uuid from 'uuid';
import { newTimer } from './helpers.js';

import EditableTimerList from './components/EditableTimerList';
import ToggleableTimerForm from './components/ToggleableTimerForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      timers: [
        {
          title: 'Practice App',
          project: 'Web Dev Training',
          id: uuid.v4(),
          elapsed: 5456099,
          runningSince: Date.now()
        },
        {
          title: 'Read Cook Book',
          project: 'Learning to Cook',
          id: uuid.v4(),
          elapsed: 1273998,
          runningSince: Date.now()
        }
      ]
    };

    this.handleCreateFormSubmit = this.handleCreateFormSubmit.bind(this);
    this.handleUpdateFormSubmit = this.handleUpdateFormSubmit.bind(this);
    this.handleDeleteTimer = this.handleDeleteTimer.bind(this);
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

    // const { timers } = this.state;
    // const timerToEdit = this.findTimer(attr);
    // const index = timers.indexOf(timerToEdit);
    // timers[index].title = attr.title;
    // timers[index].project = attr.project;
    // this.setState({ timers: timers });
  }

  deleteTimer(delAttr) {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== delAttr.id)
    });

    // const { timers } = this.state;
    // const timerToDelete = this.findTimer(delAttr);
    // const index = timers.indexOf(timerToDelete);
    // timers.splice(index, 1);
    // this.setState({ timers: timers });
  }

  // findTimer(timer) {
  //   return this.state.timers.find(t => t.id === timer.id);
  // }

  render() {
    return (
      <div className="wrapper">
        <div />
        <div className="dashboard">
          <EditableTimerList
            timers={this.state.timers}
            onFormSubmit={this.handleUpdateFormSubmit}
            onTimerDelete={this.handleDeleteTimer}
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
