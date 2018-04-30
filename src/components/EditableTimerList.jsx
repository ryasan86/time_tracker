import React, { Component } from 'react';
import EditableTimer from './EditableTimer';

export default class EditableTimerList extends Component {
  constructor() {
    super();
    this.handleTest = this.handleTest.bind(this);
  }
  
  handleTest() {
    console.log('test')
  }

  render() {
    const { timers, onFormSubmit, onTimerDelete, onStartClick, onStopClick } = this.props;
    
    const mappedTimers = timers.map(timer => {
      return (
        <EditableTimer
          key={timer.id}
          id={timer.id}
          title={timer.title}
          project={timer.project}
          elapsed={timer.elapsed}
          runningSince={timer.runningSince}
          onFormSubmit={onFormSubmit}
          onTimerDelete={onTimerDelete}
          onStartClick={onStartClick}
          onStopClick={onStopClick}
        />
      );
    });

    return (
      <div id="timers" className="timers">
        {mappedTimers}
      </div>
    );
  }
}
