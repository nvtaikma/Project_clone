import React, { useState } from "react";

export default function Todo(props) {
  const { todo, getTodoEditID, todoEditID, onEditTodo, index,  markCompleted } =
    props;
  const isEditting = todoEditID === todo.id;
  const [text, setText] = useState(todo.text);
  const eDitTodo = () => {
    onEditTodo(
      {
        ...todo,
        text,
      },
      index
    );
  };

  return (
    <li
      className={`${isEditting ? "editing" : ""}${
        todo.completed ? "completed" : ""
      }`}
    >
      {!isEditting ? (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => markCompleted(todo.id)}
          />
          <label onDoubleClick={() => getTodoEditID(todo.id)}>
            {todo.text}
          </label>
          <button className="destroy"></button>
        </div>
      ) : (
        <input
          type="text"
          className="edit"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              eDitTodo();
            }
          }}
        />
      )}
    </li>
  );
}
