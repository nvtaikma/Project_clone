import React, { Component } from "react";
import { Connect, connect } from "react-redux";
class Player extends Component {
  renderMangCuoc = () => {
    return this.props.mangCuoc.map((mangCuoc, index) => {
      // console.log(borderCheck);
      return (
        <div
          className="mr-2"
          style={{
            backgroundColor: "white",
            width: "40px",
            height: "40px",
            border: mangCuoc.datCuoc ? "3px solid red" : "none",
          }}
          key={index}
          onClick={() => {
            this.props.datCuoc(mangCuoc);
          }}
        >
          <img
            style={{ width: "80%", lineHeight: "50px", marginTop: "5px" }}
            src={mangCuoc.img}
            alt={mangCuoc.ma}
          />
        </div>
      );
    });
  };
  render() {
    // console.log("mangdatcuoc", this.props.mangCuoc);
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
                this.props.mangCuoc.find((item) => item.datCuoc === true).img
              }
              alt={`${
                this.props.mangCuoc.find((item) => item.datCuoc === true).ma
              } alt `}
            />
          </div>
        </div>

        <img className="w-50" src="./img/GameOanTuXi/player.png" alt="" />

        <div className="row d-flex justify-content-center ">
          {this.renderMangCuoc()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangCuoc: state.OanTuTiReducer.mangCuocOanTuTi,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (mangCuoc) => {
      dispatch({
        type: "DAT_CUOC",
        mangCuoc,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
