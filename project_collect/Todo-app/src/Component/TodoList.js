import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
    const { TodosList } = props;
  return (
      <section className='main'>
          <input className='toggle-all' />
          <label htmlFor='toggle-all'></label>
          <ul className='todo-list'>
              {TodosList.map((todo,index) => <Todo key={todo.id} {...{ todo }} {...props} index={index} />)}
        </ul>
    </section>
  )
}
