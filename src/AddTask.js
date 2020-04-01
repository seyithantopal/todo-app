import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
        lists: this.props.lists,
        selection: 0,
        input: ''
    };
  }

  render() {
    return (
        <div id="container">
            <div className="box">
                <div className="title">
                    <div className="title-text">Add Task</div>
                    <hr className="title-seperator" />
                </div>

                <div className="addTask">
                    <div className="task-list">
                        <select onChange={this.makeSelection}>
                            {this.state.lists.map((list, i) => <option key={i} value={i}>{list['name']}</option>)}
                        </select>
                    </div>
                    <div className="task-name">
                        <input type="textbox" onChange={this.changeValue} value={this.state.input} />
                    </div>
                    <div className="task-button">
                        <button onClick={this.addTask}>Add a New Task</button>
                        <button data-mode="default" onClick={this.props.switchMode}>Go to App</button>
                    </div>
                </div>

            </div>
        </div>
    );
  }


  changeValue = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  makeSelection = (event) => {
    this.setState({
        selection: event.target.value
    });
  }

  addTask = () => {
    if(this.state.input !== '') {
        this.props.addTask(this.state.selection, this.state.input);
        this.setState({
           input: ''
        });
    } else {
        alert('Please enter the name of the task');
    }
  }
}

export default AddTask;
