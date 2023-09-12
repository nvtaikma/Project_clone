import React, { Component } from "react";

export default class ProductItem extends Component {
    render() {
        let { Item } = this.props;
        console.log("item",Item)
    return (
      <div className="card text-left" style={{height:300}}>
        <img className="card-img-top" src={Item.hinhanh} alt="đ" />
        <div className="card-body">
                <h4 className="card-title">{ Item.name}</h4>
                <p className="card-text">{Item.price}</p>
            <button className="btn btn-success" data-toggle="modal"
          data-target="#modelId" onClick={()=>this.props.xemChiTiet(Item)}>Xem chi Tiết</button>
                
            </div>
      </div>
    );
  }
}
