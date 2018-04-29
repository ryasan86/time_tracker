import React, { Component } from 'react';
import uuid from 'uuid';

import EditableTimerList from './components/EditableTimerList';
import ToggleableTimerForm from './components/ToggleableTimerForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      timers: [
        {
          title: 'Practice squat',
          project: 'Gym Chores',
          id: uuid.v4(),
          elapsed: 5456099,
          runningSince: Date.now()
        },
        {
          title: 'Read Cook Book',
          project: 'Learning to Cook',
          id: uuid.v4(),
          elapsed: 1273998,
          runningSince: null
        }
      ]
    };
  }

  render() {
    return (
      <div className="wrapper">
        <div />
        <div className="dashboard">
          <EditableTimerList timers={this.state.timers} />
          <ToggleableTimerForm isOpen={true} />
        </div>
        <div />
      </div>
    );
  }
}

export default App;
