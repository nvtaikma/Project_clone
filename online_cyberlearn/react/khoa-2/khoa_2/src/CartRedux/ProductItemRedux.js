import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItemRedux extends Component {
  render() {
    let { sanphamRender } = this.props;
    // console.log(sanphamRender);
    return (
      <div className="card text-left">
        <img
          className="card-img-top"
          src={sanphamRender.hinhAnh}
          alt={sanphamRender.tenSP}
          style={{ width: 280, height: 300, marginLeft: 35 }}
        />
        <div className="card-body">
          <h4 className="card-title">{sanphamRender.tenSP}</h4>
          <p className="card-text">{sanphamRender.giaBan.toLocaleString()}</p>
          <div className="d-flex">
            <button
              className="btn btn-success mr-2"
              onClick={() => {
                this.props.chiTietSanPham(sanphamRender);
              }}
            >
              Chi tiet san pham
            </button>
            <button
              className="btn btn-dark"
              onClick={() => this.props.themGioHang(sanphamRender)}
            >
              thêm sản phẩm
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// hàm gửi lên store
const mapDispatchToProps = (dispatch) => {
  return {
    // tạo ra spGioHang
    themGioHang: (sanpham) => {
      let spGioHang = {
        maSP: sanpham.maSP,
        hinhAnh: sanpham.hinhAnh,
        tenSP: sanpham.tenSP,
        soLuong: 1,
        gia: sanpham.giaBan,
      };
      console.log("spGioHang", spGioHang);

      // tạo một action
      let action = {
        type: "THEM_GIO_HANG", // thuộc tính bặt buộc phải có
        spGioHang,
      };

      // dùng hàm
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(ProductItemRedux);
