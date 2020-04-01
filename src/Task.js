import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  constructor(props) {
    super(props);
    this.list = this.props.lists[this.props.index];
  }

  render() {
    return (
        <div id="container">
            <div className="box">
                <div className="title">
                    <div className="title-text">{this.list['name']}</div>
                    <div className="title-description">{this.list['readCount']} of {this.list['tasks'].length} tasks</div>
                    <hr className="title-seperator" />
                </div>

                <div className="task-container">
                    <ul className="tasks-all">
                        
                        {this.list['tasks'].map((list, i) => 
                        <li key={i} className={list['read'] ? 'done' : ''}>
                            <label>
                                <input onClick={this.makeRead} data-index={i} type="checkbox" />
                                <span></span>
                                {list['title']}
                          </label>
                        </li>
                        )}
                    </ul>
                </div>
                <button data-mode="addTask" onClick={this.props.switchMode} className="gotoApp">Add a New Task</button>
                <button data-mode="default" onClick={this.props.switchMode} className="gotoApp">Go to App</button>
            </div>
        </div>
    );
  }

  makeRead = (event) => {
      const listID = this.props.index;
      const taskID = event.target.dataset.index;
      this.props.makeRead(listID, taskID);
  }

}

export default Task;
