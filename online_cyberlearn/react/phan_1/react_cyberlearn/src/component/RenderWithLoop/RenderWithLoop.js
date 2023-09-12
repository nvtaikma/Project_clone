import React, { Component } from "react";

export default class RenderWithLoop extends Component {
  productsList = [
    {
      id: 1,
      name: "black-car",
      price: 1000,
      img: require("../assets/CarBasic/products/black-car.jpg"),
    },
    {
      id: 2,
      name: "red-car",
      price: 1000,
      img: require("../assets/CarBasic/products/red-car.jpg"),
    },
    {
      id: 3,
      name: "silver-car",
      price: 1000,
      img: require("../assets/CarBasic/products/silver-car.jpg"),
    },
    {
      id: 4,
      name: "steel-car",
      price: 1000,
      img: require("../assets/CarBasic/products/steel-car.jpg"),
    },
    ];
    // cach1
    // RenderListWithFor = () => {
    //     let mangTr = [];
    //     for (let index = 0; index < this.productsList.length; index++) {
    //         let products = this.productsList[index];

    //         let trJSX = <tr>
    //             <td>{products.id}</td>
    //             <td>{products.name}</td>
    //             <td>{products.price}</td>
    //             <td><img src={products.img} alt="img" style={{width:"100px"}}/></td>
    //             {/* <td></td> */}
    //         </tr>
    //         mangTr.push(trJSX);
            
    //     }
    //     return mangTr;
    // }
// cach 2
    
    renderListWithMap = () => {
        let mangTR = this.productsList.map((products, index) => {
            return (<tr key={index}>
                <td>{products.id}</td>
                <td>{products.name}</td>
                <td>{products.price}</td>
                <td><img src={products.img} alt="img" style={{ width: "100px" }} /></td>
                <td></td>
            </tr>);
        });
        return mangTR
    }
 

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
              <th></th>
            </tr>
          </thead>
                <tbody>
                    {this.renderListWithMap()}
          </tbody>
        </table>
      </div>
    );
  }
}
