import React, { Component } from 'react'
import Buoi18 from './component/Buoi-18/buoi18'
import UseState from './component/Buoi-22/UseState'
import TodoHook from './component/TodoHook/TodoHook'
import UseEfect from './component/Buoi-23/UseEfect'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Buoi18 /> */}
        {/* <UseState /> */}
        <TodoHook />
        {/* <UseEfect /> */}
      </div>
    )
  }
}
