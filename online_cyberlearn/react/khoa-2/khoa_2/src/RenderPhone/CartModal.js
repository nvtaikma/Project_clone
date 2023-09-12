import React, { Component } from "react";

export default class CartModal extends Component {
    renderGioHang = () => {
    let { gioHang } = this.props;

        return gioHang.map((item, index) => {
            return <tr key={index} className="text-center mt-5">
                <td style={{lineHeight:9}}>{ item.mSP}</td>
                <td><img src={item.hinhAnh} alt={item.tenSP} style={{width:150,height:150}} /></td>
                <td style={{lineHeight:9}}>{ item.tenSP}</td>
              <td style={{ lineHeight: 9 }}>
              <button className="btn btn-success" onClick={()=>{this.props.tangGiamSoLuong(item.maSP,1)}}>+</button>
                     {item.soLuong.toLocaleString()}
                    <button className="btn btn-success" onClick={()=>{this.props.tangGiamSoLuong(item.maSP,-1)}}>-</button>
          
                
                </td>
                <td style={{lineHeight:9}}>{item.donGia.toLocaleString() }</td>
                <td style={{lineHeight:9}}>{(item.soLuong*item.donGia).toLocaleString() }</td>
            <td style={{lineHeight:9}}><button className="btn btn-danger" onClick={()=>this.props.xoaGioHang(item.mSP)}>Xóa</button></td>
          </tr>
        })
    }
  render() {
    let { gioHang } = this.props;
    // console.log("gio hang", gioHang);
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            role="document"
            style={{ minWidth: 800 }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ Hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table table-striped table-inverse table-responsive">
                  <thead className="thead-inverse text-center">
                    <tr>
                      <th>MSP</th>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                </thead>
                    {this.renderGioHang()}       

                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
