import React, { Component } from 'react';
import EditableTimerList from './components/EditableTimerList';
import ToggleableTimerForm from './components/ToggleableTimerForm';

const App = () => {
  return (
    <div className="wrapper">
      <div />
      <div>
        <EditableTimerList />
        <ToggleableTimerForm isOpen={true} />
      </div>
      <div />
    </div>
  );
};

export default App;
