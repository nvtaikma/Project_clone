import React, { Component } from "react";
import dataArrayFeatures from "../data/arrayFeatures.json";
import dataWheels from "../data/wheels.json";

export default class ChonXeRote extends Component {
  state = {
    CarCurrent: {
      id: 1,
      title: "Crystal Black",
      type: "Pearl",
      img: "./images/icons/icon-black.jpg",
      srcImg: "images-black/images-black-1/",
      color: "Black",
      price: "19,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-black/images-black-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-black/images-black-2/",
        },
        {
          idWheel: 3,
          srcImg: "images-black/images-black-3/",
        },
      ],
    },
  };

  changeStateCarCurrent = (item) => {
    console.log("ok", item);
    this.setState({
      CarCurrent: item,
    });
  };

  changeWheels = (newWheel) => {
    let obWheel = this.state.CarCurrent.wheels.find(
      (item) => item.idWheel == newWheel.idWheel
    );
    if (obWheel !== -1) {
      this.setState({
        CarCurrent: { ...this.state.CarCurrent, srcImg: obWheel.srcImg },
      });
    }
  };

  renderIconFeatures = () => {
    return dataArrayFeatures.map((item, index) => {
      return (
        <div
          className="row m-1 border p-1"
          key={index}
          style={{ cursor: "pointer" }}
          onClick={() => {
            this.changeStateCarCurrent(item);
          }}
        >
          <div className="col-2">
            <img className="w-100 p-0" src={item.img} alt="icon" />
          </div>
          <div className="col-10">
            <h3 className="m-0">{item.title}</h3>
            <p className="m-0">{item.type}</p>
          </div>
        </div>
      );
    });
  };
  renderWheels = () => {
    return dataWheels.map((itemWheels, index) => {
      return (
        <div
          className="row m-1 border p-1"
          key={index}
          style={{ cursor: "pointer" }}
          onClick={() => {
            this.changeWheels(itemWheels);
          }}
        >
          <div className="col-3">
            <img className="w-100 p-0" src={itemWheels.img} alt="icon" />
          </div>
          <div className="col-9">
            <h3 className="m-0" style={{ fontSize: "20px" }}>
              {itemWheels.title}
            </h3>
            <p className="m-0">{itemWheels.price}</p>
          </div>
        </div>
      );
    });
  };

  componentDidMount = () => {
    //Đây là phương thức có sẵn của component tự động thực thi sau khi render được gọi, lưu ý: componentDidmount chỉ chạy 1 lần đầu tiên sau khi render thực thi
    // <script src="https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.4.1/js-cloudimage-360-view.min.js"></script>

    let tagScript = document.createElement("script");
    tagScript.src =
      "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.4.1/js-cloudimage-360-view.min.js";

    document.querySelector("#appendScript").appendChild(tagScript);
  };

  componentDidUpdate = () => {
    //Hàm này chạy sau khi state thay đổi (Tự kích hoạt sau render)
    //Lưu ý: Không được phép setState tại component này vì infinity loop

    //clean ảnh cũ
    document.querySelector("#carCurrent").innerHTML = "";

    let tagScript = document.createElement("script");
    tagScript.src =
      "https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js";

    //clear script cũ trước khi append script mới của thư viện vào
    document.querySelector("#appendScript").innerHTML = "";
    document.querySelector("#appendScript").appendChild(tagScript);
  };

  render() {
    return (
      <div className="container p-0">
        <div className="row p-0">
          <div className="col-6">
            <div className="model">
              <div
                id="carCurrent"
                style={{ minWidth: "100%" }}
                className="cloudimage-360"
                data-folder={"./images/" + this.state.CarCurrent.srcImg}
                data-filename="civic-{index}.jpg"
                data-amount="8"
              ></div>
              <div id="appendScript"></div>
            </div>
            <div className="card">
              <h5 className="card-header text-default">Exterior color</h5>

              <table className="table border border-color-light" border={1}>
                <tbody>
                  <tr>
                    <td>color</td>
                    <td>{this.state.CarCurrent.color}</td>
                  </tr>
                  <tr>
                    <td>price</td>
                    <td>{this.state.CarCurrent.price}</td>
                  </tr>
                  <tr>
                    <td>engineType</td>
                    <td>{this.state.CarCurrent.engineType}</td>
                  </tr>
                  <tr>
                    <td>displacement</td>
                    <td>{this.state.CarCurrent.displacement}</td>
                  </tr>
                  <tr>
                    <td>horsepower</td>
                    <td>{this.state.CarCurrent.horsepower}</td>
                  </tr>
                  <tr>
                    <td>torque</td>
                    <td>{this.state.CarCurrent.torque}</td>
                  </tr>
                  <tr>
                    <td>redline</td>
                    <td>{this.state.CarCurrent.redline}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-header">Wheels</div>
              <div className="card-body">{this.renderIconFeatures()}</div>
            </div>

            <div className="card">
              <div className="card-header">Featured</div>
              <div className="card-body">{this.renderWheels()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
