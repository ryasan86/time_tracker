import React, { Component } from 'react';

export default class TimerForm extends Component {
  render() {
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
          </div>
        </div>
      </div>
    );
  }
}
