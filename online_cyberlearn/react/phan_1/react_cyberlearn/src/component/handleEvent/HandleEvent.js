import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick() {
        alert("ok")
    }
  render() {
    return (
        <div>
            <button type="button" onClick={() => {
                this.handleClick();
            }}>Click me!</button>
      </div>
    )
  }
}
