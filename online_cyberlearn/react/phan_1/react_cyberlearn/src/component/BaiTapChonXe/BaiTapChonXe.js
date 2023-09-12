import React, { Component } from "react";

export default class BaiTapChonXe extends Component {

  state={
    imgProduct: require("../assets/CarBasic/products/black-car.jpg"),
  }

  clickCar = (img) =>{
    this.setState({
      imgProduct: img
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img
              src={this.state.imgProduct}
              style={{ width: "100%" }}
              alt="blackcar"
            />
          </div>
          <div className="col-5">
            <div className="card text-dark">
              <div className="card-header text-primary">Exterior Color</div>
              <div className="card-body">
                <div className="row border border-link pt-2 pb-2 mb-1" onClick={()=> this.clickCar(require("../assets/CarBasic/products/red-car.jpg"))}>
                  <img
                    className="col-3"
                    src={require("../assets/CarBasic/icons/icon-red.jpg")}
                    alt=""
                  />
                  <div className="col-9">
                    <h3>Crytals Black</h3>
                    <p>Peal</p>
                  </div>
                </div>
                <div className="row border border-link pt-2 pb-2 mb-1" onClick={()=> this.clickCar(require("../assets/CarBasic/products/black-car.jpg"))}>
                  <img
                    className="col-3"
                    src={require("../assets/CarBasic/icons/icon-black.jpg")}
                    alt=""
                  />
                  <div className="col-9">
                    <h3>Crytals Black</h3>
                    <p>Peal</p>
                  </div>
                </div>
                <div className="row border border-link pt-2 pb-2 mb-1" onClick={()=> this.clickCar(require("../assets/CarBasic/products/silver-car.jpg"))}>
                  <img
                    className="col-3"
                    src={require("../assets/CarBasic/icons/icon-silver.jpg")}
                    alt=""
                  />
                  <div className="col-9">
                    <h3>Crytals Black</h3>
                    <p>Peal</p>
                  </div>
                </div>
                <div className="row border border-link pt-2 pb-2 mb-1" onClick={()=> this.clickCar(require("../assets/CarBasic/products/steel-car.jpg"))}>
                  <img
                    className="col-3 img-fluid"
                    src={require("../assets/CarBasic/icons/icon-steel.jpg")}
                    alt=""
                  />
                  <div className="col-9">
                    <h3>Crytals Black</h3>
                    <p>Peal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
