import React, { Component } from 'react';
import EditableTimer from './EditableTimer';

export default class EditableTimerList extends Component {
  render() {
    const timers = this.props.timers.map(timer => {
      return (
        <EditableTimer
          key={timer.id}
          id={timer.id}
          title={timer.title}
          project={timer.project}
          elapsed={timer.elapsed}
          runningSince={timer.runningSince}
          onFormSubmit={this.props.onFormSubmit}
          onTimerDelete={this.props.onTimerDelete}
        />
      );
    });

    return (
      <div id="timers" className="timers">
        {timers}
      </div>
    );
  }
}
