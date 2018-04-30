import React, { Component } from 'react';

export default class TimerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title || '',
      project: this.props.project || ''
    };
  }

  handleSubmit() {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      project: this.state.project
    });
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    const submitText = this.props.id ? 'Update' : 'Create';

    return (
      <div className="card">
        <div className="form">
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="field">
            <label>Project</label>
            <input
              type="text"
              name="project"
              value={this.state.project}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="attached" align="center">
            <button className="blue" onClick={() => this.handleSubmit()}>
              {submitText}
            </button>
            <button className="red" onClick={() => this.props.onFormClose()}>
              cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
