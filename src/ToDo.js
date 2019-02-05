//https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd

import React, { Component } from 'react';
import './ToDo.css';
import ToDoItem from './components/ToDoItem';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ todo: 'clean the house' }, { todo: 'pay bills' }],
      todo: ''
    };
  }

  // watches the value entered into the input
  // updates the state of todo
  handleInput = e => {
    this.setState({
      todo: e.target.value
    });
  };

  // ensures that a blank item cannot be added
  // triggers the createNewToDoItem function
  handleKeyPress = e => {
    if (e.target.value !== '') {
      if (e.key === 'Enter') {
        this.createNewToDoItem();
      }
    }
  };

  // takes the entire list from state (using a spread operator)
  // and adds the value entered into the input on the end of the list
  // todo is set back to an emply string to update the value inside input
  createNewToDoItem = e => {
    const { todo } = this.state;

    //check for errors
    if (todo === '') {
      console.log('oopsie');
      return;
    }

    this.setState(({ list, todo }) => ({
      list: [...list, { todo }],
      todo: ''
    }));
  };

  // this is now being emitted back to the parent from the child component
  // create a filtered list which does not include the item that triggered
  // the deleteItem function
  deleteItem = indexToDelete => {
    this.setState(({ list }) => ({
      list: list.filter((toDo, index) => index !== indexToDelete)
    }));
  };

  render(e) {
    return (
      <div className="todo-wrapper">
        <div className="ToDo-Container">
          <div className="ToDo-Content">
            {this.state.list.map((item, key) => {
              return (
                <ToDoItem
                  key={key}
                  item={item.todo}
                  deleteItem={this.deleteItem.bind(this, key)}
                />
              );
            })}
          </div>
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            value={this.state.todo}
            placeholder="Your task.."
            onChange={this.handleInput}
            onKeyPress={this.handleKeyPress}
          />
          <button className="add-button" onClick={this.createNewToDoItem}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default ToDo;
