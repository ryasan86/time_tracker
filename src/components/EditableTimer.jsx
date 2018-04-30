import React, { Component } from 'react';
import Timer from './Timer';
import TimerForm from './TimerForm';

export default class EditableTimer extends Component {
  constructor() {
    super();
    this.state = { editFormOpen: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.onFormClose = this.onFormClose.bind(this);
  }

  handleSubmit(timer) {
    this.props.onFormSubmit(timer);
    this.closeForm();
  }

  handleEditClick() {
    this.openForm();
  }

  handleDeleteClick() {
    this.props.onTimerDelete({
      id: this.props.id
    });
  }

  onFormClose() {
    this.closeForm();
  }

  openForm() {
    this.setState({ editFormOpen: true });
  }

  closeForm() {
    this.setState({ editFormOpen: false });
  }

  render() {
    const { id, title, project, elapsed, runningSince } = this.props;

    if (this.state.editFormOpen) {
      return (
        <TimerForm
          id={id}
          title={title}
          project={project}
          onFormClose={this.onFormClose}
          onFormSubmit={this.handleSubmit}
        />
      );
    } else {
      return (
        <Timer
          id={id}
          title={title}
          project={project}
          elapsed={elapsed}
          runningSince={runningSince}
          onEditClick={this.handleEditClick}
          onTimerDelete={this.handleDeleteClick}
        />
      );
    }
  }
}
