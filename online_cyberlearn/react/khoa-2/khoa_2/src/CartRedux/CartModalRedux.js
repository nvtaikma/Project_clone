import React, { Component } from "react";
// sử dụng thư viên connect  để lấy dữ liệu từ store về
import { connect } from "react-redux";

class CartModalRedux extends Component {
  render() {
    // console.log("gio hang", this.props.gioHang)
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
                  <thead className="thead-inverse">
                    <tr>
                      <th>maSP</th>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.gioHang.map((itemGH, index) => {
                      return (
                        <tr key={index}>
                          <th>{itemGH.maSP}</th>
                          <th>
                            <img
                              src={itemGH.hinhAnh}
                              alt={itemGH.tenSP}
                              style={{ width: 70, height: 100 }}
                            />
                          </th>
                          <th>{itemGH.tenSP}</th>
                          <th>
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                this.props.tangGiamSoLuong(itemGH.maSP, true);
                              }}
                            >
                              +
                            </button>
                            {itemGH.soLuong}
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                this.props.tangGiamSoLuong(itemGH.maSP, false);
                              }}
                            >
                              -
                            </button>
                          </th>
                          <th>{itemGH.gia.toLocaleString()}</th>
                          <th>{(itemGH.soLuong * itemGH.gia).toLocaleString()}</th>
                          <th>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                this.props.xoaGioHang(itemGH.maSP);
                              }}
                            >
                              xóa
                            </button>
                          </th>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tr>
                    <th colSpan={5}></th>
                    <th>Tổng Tiền</th>
                    <th>
                      {this.props.gioHang
                        .reduce((tongTien, gioHang, index) => {
                          return (tongTien += gioHang.soLuong * gioHang.gia);
                        }, 0)
                        .toLocaleString()}
                      đ
                    </th>
                  </tr>
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

// hàm lấy state của redux biển đổi thành props của component
const mapStateToProps = (state) => {
  return {
    gioHang: state.stateGioHang.gioHang,
  };
};

// hàm đưa dữ liệu lên reducer
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSP) => {
      let action = {
        type: "XOA_GIO_HANG",
        maSP,
      };

      // console.log(maSP);
      dispatch(action);
    },
    tangGiamSoLuong: (maSP, tangGiam) => {
      // tăng thì tangGiam=true; giảm thì tangGiam = false
      let action = {
        type: "TANG_GIAM_SO_LUONG",
        maSP,
        tangGiam,
      };

      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartModalRedux);
