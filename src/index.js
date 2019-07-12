import React from "react";
import ReactDOM from "react-dom";

import TodoItem from "./todoItem";

import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      todos: []
    };
  }

  renderTools = () => {
    return this.state.todos.map((todo, index) => {
      return <TodoItem title={todo} key={index} />;
    });
  };

  handleChange = event => {
    this.setState({
      todo: event.target.value
    });
    console.log(this.state.todo);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.todo],
      todo: ""
    });
  };

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <form onSubmit={this.handleSubmit} className="add-todo">
          <input
            type="text"
            placeholder="  Add To Do"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
        {this.renderTools()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
