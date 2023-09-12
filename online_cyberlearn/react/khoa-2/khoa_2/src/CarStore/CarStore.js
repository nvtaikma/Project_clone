import React, { Component } from "react";
import Modal from "./Modal";
import ProductList from "./ProductList";

export default class CarStore extends Component {
  products = [
    {
      id: 1,
      name: "Black car",
      hinhanh: "../img/black-car.jpg",
      price: 100000,
    },
    {
      id: 2,
      name: "steel-car",
      hinhanh: "../img/steel-car.jpg",
      price: 100000,
    },
    {
      id: 3,
      name: "Sliver car",
      hinhanh: "../img/silver-car.jpg",
      price: 100000,
    },
    {
      id: 4,
      name: "Black car",
      hinhanh: "../img/red-car.jpg",
      price: 100000,
    },
  ];
  state = {
    productDetail: {
      id: 5,
      name: "Black car",
      hinhanh: "../img/red-car.jpg",
      price: 100000,
    },
  };

  ChangeProductDetail = (newProduct) => {
    this.setState({
      productDetail: newProduct,
    });
  };
  render() {
    return (
      <div>
        {/* truyền products và funtion "productDetail" xuống ProductList */}
        <ProductList
          productList={this.products}
          xemChiTiet={this.ChangeProductDetail}
        />
        {/* truyền state vào modal */}
        <Modal contents={this.state.productDetail} />
      </div>
    );
  }
}
