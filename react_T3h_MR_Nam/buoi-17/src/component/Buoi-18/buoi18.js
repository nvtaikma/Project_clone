import React, { Component } from 'react'

export default class Buoi18 extends Component {
  constructor(props) {
  console.log("running is contructor")
    super(props);
    this.state = {
      counter: 0,
    }
    

  }
  // static getDeriveStateFromProps(props, state) {
  //   console.log("running on getderiveStateFromProps");
  //   return { counter: 10 };
  // }
  componentDidMount() {
    console.log("running is componentDidMount")
    setTimeout(() => {
      this.setState({ counter: this.state.counter + 1 })
    },2000)
  }

  shouldComponentUpdate(){
    console.log("running on shouldComponentUpdate")
    
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("running is getSnapshotBeforeUpdate")
    document.getElementById("PrevStateEleme").innerHTML = "this is prevState" + prevState.counter;
  }

  render() {
    console.log("running on reder")
    return (
        <div>
          <p id="PrevStateEleme"></p>
            <p>counter is:{this.state.counter}</p>
      </div>
    )
  }
}
