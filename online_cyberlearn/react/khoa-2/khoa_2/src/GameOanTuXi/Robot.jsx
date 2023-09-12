import React, { Component } from "react";
import { connect } from "react-redux";

class Robot extends Component {
  render() {
    return (
      <div>
       <div className="speech-bubble pt-2">
          <div
            style={{ backgroundColor: "white", width: "80%", margin: "0 auto" }}
          >
            <img
              width={50}
              style={{ transform: "rotate(-45deg)" }}
              src={
                this.props.robot.img
              }
              alt={this.props.robot.ma}
            />
          </div>
        </div>
        <img
          className="w-50"
          src="./img/GameOanTuXi/playerComputer.png"
          alt=""
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    robot: state.OanTuTiReducer.robot,
  };
};
export default connect(mapStateToProps)(Robot);
