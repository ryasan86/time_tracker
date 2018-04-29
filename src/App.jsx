import React, { Component } from 'react';
import EditableTimerList from './components/EditableTimerList';
import ToggleableTimerForm from './components/ToggleableTimerForm';

const App = () => {
  return (
    <div className="wrapper">
      <div className="column" />
      <div className="column">
        <EditableTimerList />
        <ToggleableTimerForm isOpen={true} />
      </div>
      <div className="column" />
    </div>
  );
};

export default App;
