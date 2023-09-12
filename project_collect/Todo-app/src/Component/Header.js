import React, { useState } from "react";

export default function Header(props) {
  const [text, setText] = useState('');
  const { addTodo } = props;
  const onAddTodo = (e) => {
    if (e.key === "Enter" && text) {
      addTodo({
        id: new Date().valueOf(),
        text,
        isCompleted: false
      })
      setText('');
    }
  }
  return (
    <header className="header">
      <h1>TODOS</h1>
      <input
        type="input"
        className="new-todo"
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyDown={(e)=> onAddTodo(e)}
      />
    </header>
  );
}
