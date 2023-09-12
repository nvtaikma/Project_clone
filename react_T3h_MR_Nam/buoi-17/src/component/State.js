import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
        // this.increase = this.increase.bind(this)
    }
    increase = () => {
        this.setState({ counter: this.state.counter + 1 });
        
    }
    reduce = () => {
        this.setState({ counter: this.state.counter - 1 });
        
    }
  render() {
    return (
        <div>
            <button type="button"onClick={this.reduce}>-</button>
            <div>
                couter: {this.state.counter}
            </div>
            <button onClick={this.increase}>+</button>
            <Child counter={this.state.counter} appsetState={this.increase} />
      </div>
    )
  }
}

export class Child extends State {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>couterNew : {this.props.counter}</p>
                <button onClick={this.props.appsetState}>+</button>

           </div>
            )
    }
}
