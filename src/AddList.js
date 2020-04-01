import React, { Component } from 'react';
import './AddList.css';

class AddList extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  render() {
    return (
        <div id="container">
        <div className="box">
            <div className="title">
                <div className="title-text">Add List</div>
                <hr className="title-seperator" />
            </div>

            <div className="addList">
                <div className="list-name">
                    <input value={this.state.input} onChange={this.changeValue} type="textbox" />
                </div>
                <div className="list-button">
                    <button onClick={this.addList}>Add a New List</button>
                    <button data-mode="default" onClick={this.props.switchMode}>Go to App</button>
                </div>
            </div>

        </div>
    </div>
    );
  }


  addList = () => {
    if(this.state.input !== '') {
      this.props.addList(this.state.input)
      this.setState({
        input: ''
      });
    } else {
      alert('Please enter the name of the list');
    }
  }

  changeValue = (event) => {
    this.setState({
      input: event.target.value
    });
  }
}

export default AddList;
