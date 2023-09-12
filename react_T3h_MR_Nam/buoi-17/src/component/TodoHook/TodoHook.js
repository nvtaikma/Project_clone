import React, { useState, useEffect } from "react";
import ListTodoHook from "./ListTodoHook";
import "./TodoApp.css";
import TodoHookFooter from "./TodoHookFooter";
import axios from "axios";

const TodoHook = () => {
  const [ListTodo, setListTodo] = useState([]);
  const fetchTodoList = async () => {
    const { data } = await axios.get(
      "https://63a44da8821953d4f2b0523b.mockapi.io/Todo-list"
    );
    setListTodo(data);
  };
  

  const pushValueInput = async (event) => {
    console.log("test push");
    if (event.key === "Enter") {
      event.stopPropagation();
      const { data } = await axios.post(
        "https://63a44da8821953d4f2b0523b.mockapi.io/Todo-list",
        {
          id: 4,
          content: event.target.value,
          isActive: false,
          isComplete: true,
        }
      );
      setListTodo([...ListTodo, { ...data }]);
      // fetchTodoList();
      event.target.value = "";

      // setListTodo(([
      //   ...ListTodo,
      //   {
      //     id: 4,
      //   content: event.target.value,
      //   isActive: false,
      //   isComplete: true
      //   }
      // ]));
    }
    console.log(ListTodo);
  };
  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <section className="todoapp">
      <div data-reactid=".0">
        <header className="header" data-reactid=".0.0">
          <h1 data-reactid=".0.0.0">todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            defaultValue=""
            data-reactid=".0.0.1"
            onKeyDown={pushValueInput}
          />
        </header>
        {/* <TodoHookHeader /> */}
        <ListTodoHook ListTodo={ListTodo} />
        <TodoHookFooter />
      </div>
    </section>
  );
};

export default TodoHook;
