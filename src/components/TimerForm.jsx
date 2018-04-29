import React, { Component } from 'react';

export default class TimerForm extends Component {
  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <div className="card">
        <div className="content">
          <div className="form">
            <div className="field">
              <label>Title</label>
              <input type="text" defaultValue={this.props.title} />
            </div>
            <div className="field">
              <label>Project</label>
              <input type="text" defaultValue={this.props.project} />
            </div>
            <div className="attached" align="center">
              <button className="blue">{submitText}</button>
              <button className="red">cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
