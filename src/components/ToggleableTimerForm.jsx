import React, { Component } from 'react';
import TimerForm from './TimerForm';

export default class ToggleableTimerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormClose = this.handleFormClose.bind(this);
  }

  handleFormOpen() {
    this.setState({
      isOpen: true
    });
  }

  handleFormClose() {
    this.setState({ isOpen: false });
  }

  handleFormSubmit(timer) {
    this.props.onFormSubmit(timer);
    this.setState({ isOpen: false });
  }

  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <div align="center">
          <button
            className="toggle-button"
            onClick={() => this.handleFormOpen()}
          >
            +
          </button>
        </div>
      );
    }
  }
}
