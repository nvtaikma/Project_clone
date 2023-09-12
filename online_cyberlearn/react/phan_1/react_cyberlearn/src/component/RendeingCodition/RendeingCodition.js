import React, { Component } from 'react'

export default class RendeingCodition extends Component {
    // render với điều kiện if

    login = false;
    name = "Nguyen Tai"

    renderConTent = () => {
        if (this.login) {
            <div>{this.name}</div>
        }
        return <button type="">login</button>
    }

  render() {
    return (
        <div>
            {/* cách 1: khi điều kiện ngắn, nếu dài ta phải viết bằng funtion */}
            {/* {this.login ? <div>{this.name}</div> : <button type="">login</button> } */}
            {this.renderConTent()}
      </div>
    )
  }
}
