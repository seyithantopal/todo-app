import React, { Component } from 'react';
import './App.css';

import AddList from './AddList'
import AddTask from './AddTask'
import Task from './Task'

class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: [],
      mode: 'default',
      index: -1
    };  
  }

  render() {
    if(this.state.mode === 'default') {
      return (
        <div id="container">
              <div className="box">
                  <div className="logo">
                      <div className="logo-text">MyLists</div>
                  </div>

                  <div className="add-list-container">
                      <div className="add-list">
                          <div data-mode="addList" onClick={this.switchMode} className="add-list-plus">+</div>
                          <div className="add-list-text">Add List</div>
                      </div>
                  </div>

                  <div className="list-container">
                      
                      {this.state.lists.map((list, i) => 
                        <div className="list" key={i}>
                          <div className="list-title" data-index={i} data-mode="task" onClick={this.switchMode}>{list['name']}</div>
                          <hr />
                          <div className="tasks-container">
                              <ul className="tasks">
                                {list['tasks'].map((task, index) =>  {
                                  if(task['read'] === false) {
                                    return <li key={index}>{task['title']}</li>
                                  }
                                })}
                              </ul>
                          </div>
                      </div>
                      )}
                  </div>
              </div>
          </div>
      );
    } else if(this.state.mode === 'addList') {
      return (
        <AddList 
        addList={this.addList}
        switchMode={this.switchMode} />
      );
    } else if(this.state.mode === 'addTask') {
      return (
        <AddTask 
        lists={this.state.lists}
        addTask={this.addTask}
        switchMode={this.switchMode} />
      );
    } else if(this.state.mode === 'task') {
      return (
        <Task
        lists={this.state.lists}
        index={this.state.index}
        makeRead={this.makeRead}
        readCount={this.state.readCount}
        switchMode={this.switchMode} />
      );
    }
    
  }


  switchMode = (event) => {
    const mode = event.target.dataset.mode;
    let index = -1
    if(event.target.dataset.index !== undefined) index = event.target.dataset.index;
    this.setState({
      mode: mode,
      index: index
    });
  }

  addList = (listName) => {
    const temp = {
      name: listName,
      tasks: [],
      readCount: 0
    }
    this.setState(state => ({
      lists: [...state.lists, temp],
      mode: 'default'
    }));
  }

  addTask = (selection, input) => {
    const temp = [...this.state.lists];
    temp[selection].tasks.push({
      title: input,
      read: false
    });
    this.setState({
      lists: temp,
      mode: 'task',
      index: selection
    });
  }

  makeRead = (listID, taskID) => {
    let tempArr = [...this.state.lists];

    if(tempArr[listID].tasks[taskID].read === true) {
      tempArr[listID].tasks[taskID].read = false;
      tempArr[listID].readCount = tempArr[listID].readCount - 1;
    } else {
      tempArr[listID].readCount = tempArr[listID].readCount + 1;
      tempArr[listID].tasks[taskID].read = true;
    }
    this.setState(state => ({
      lists: tempArr
    }))
  }
}

export default App;
