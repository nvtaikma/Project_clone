import React, { PureComponent } from "react";
import "./css/Todo.css";
import Header from "./Component/Header";
import TodoList from "./Component/TodoList";
import Footer from "./Component/Footer";

export default class App extends PureComponent {
  state = {
    TodosList: [
      {
        id: 1,
        text: "todo1",
        isCompleted: true
      },
      {
        id: 2,
        text: "todo2",
        isCompleted: false
      },
    ],
    todoEditID: "",
  };
  // them todo
  addTodo = (todo = {}) => {
    this.setState((preState) => ({
      TodosList: [...preState.TodosList, todo],
    }));
  };
  // edit todo
  getTodoEditID = (id = "") => {
    this.setState({
      todoEditID: id,
    });
  };
  onEditTodo = (todo, index = -1) => {
    if (index >= 0) {
      const { TodosList: list } = this.state;
      list.splice(index, 1, todo);
      this.setState({
        TodoList: list,
        todoEditID: "",
      });
    }
  };

  markCompleted = (id="") => {
    this.setState( preState => ({
      todosList: preState.todosList.map( todo => todo.id === id ? ({ ...todo, isCompleted: !todo.isCompleted }) : todo)
    }));
  };

  render() {
    const { TodosList, todoEditID } = this.state;
    return (
      <div className="todoapp">
        <Header addTodo={this.addTodo} />
        <TodoList
          TodosList={TodosList}
          getTodoEditID={this.getTodoEditID}
          todoEditID={todoEditID}
          onEditTodo={this.onEditTodo}
          markCompleted={this.markCompleted}
        />
        <Footer />
      </div>
    );
  }
}
