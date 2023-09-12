import React, { Component } from 'react'
import "./App.css";


export default class Props extends Component {
    render() {
        const navbarTags = ["Home", "New", "Contact", "About"];
        return (
          <div>
            <Child listTag={navbarTags} />
          </div>
        );
      }
}

export class Child extends Props {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      // console.log(this.props);
      return (
        <div>
          <div className="topnav">
            {this.props.listTag.map((item, index) => {
              return (
                <a
                  className={index === 0 ? "active" : ""}
                  href="htt"
                  key={index}
                  onClick={() => {
                    alert("ok");
                  }}
                >
                  {item}
                </a>
              );
            })}
          </div>
          <div style={{ paddingLeft: 16 }}>
            <h2>Top Navigation Example</h2>
            <p>Some content..</p>
          </div>
        </div>
      );
    }
  }
//   export default App;