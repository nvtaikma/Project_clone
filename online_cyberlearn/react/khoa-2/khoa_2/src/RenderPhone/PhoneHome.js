/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { Component } from "react";
import CartModal from "./CartModal";
import ListProducts from "./ListProducts";

export default class PhoneHome extends Component {
  state = {
    gioHang: [],
  };
  // thêm giỏ hàng
  addGioHang = (sanphamnew) => {
    // console.log("san pham new", sanphamnew);
    const sanPham = {
      mSP: sanphamnew.maSP,
      hinhAnh: sanphamnew.hinhAnh,
      tenSP: sanphamnew.tenSP,
      soLuong: 1,
      donGia: sanphamnew.giaBan,
    };
    // tìm sản phẩm xem đã có trong giỏ hàng chưa
    let kiemtragiohang = this.state.gioHang.findIndex(
      (gioHang) => gioHang.mSP === sanphamnew.maSP
    );
    
    if (kiemtragiohang !== -1) {
      // khi click thêm sản phẩm , nếu đã có sản phẩm trong giỏ hàng rồi thì tăng số lượng sản phẩm lên 1
      this.state.gioHang[kiemtragiohang].soLuong += 1;
    } else {
      // tìm không thấy sản phẩm trong giỏ hàng thì thêm sản phẩm mới vào giỏ hàng
      this.state.gioHang.push(sanPham);
    }
    this.setState({
      gioHang: this.state.gioHang,
    });
  };

  // delete giỏ hàng
  deleteGioHang = (msp) => {
    // console.log(msp)
    // xóa giỏ hàng
    let xoaGioHang = this.state.gioHang.findIndex(gioHang => gioHang.mSP === msp)
    if (xoaGioHang != -1) {
      this.state.gioHang.splice(xoaGioHang,1)
    }
    this.setState({
      gioHang: this.state.gioHang,
    })

  }
  
  // tổng số lượng giỏ hàng
  
  tinhTongSoLuong = () => {
    // dùng vòng lặp for
    // let tongSoLuong = 0;
    // for (let i = 0; i < this.state.gioHang.length; i++){
    //   let spGioHang = this.state.gioHang[i];
    //   tongSoLuong += spGioHang.soLuong;
    // }
    // return tongSoLuong;

    // dung reduce

    return this.state.gioHang.reduce((tongSoLuong, gioHang, index) => {
      return tongSoLuong += gioHang.soLuong;
    },0)
  }

  // tăng giảm số lượng giỏ hàng
  tangGiamSoLuong = (maSP, number) => { //1 tăng giảm -1

    let gioHang = [...this.state.gioHang];

    let index = gioHang.findIndex(spGioHang => spGioHang.maSP === maSP);
    console.log("test", index);
    if (index !== -1) {
        if (gioHang[index].soLuong <= 1 && number === -1 ) {
            gioHang[index].soLuong -= number;

            alert('Số lượng tối thiểu ít nhất là 1!')
            return ;
        }
        //Tìm ra spGioHang trong giỏ hàng thứ index => tăng số lượng
        gioHang[index].soLuong += number;

    }

    //render và gán lại giá trị state.gioHang
    this.setState({
        gioHang: gioHang
    })

}


  render() {
    return (
      <div className="container-fluid">
        

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="/#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="https://google.com"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="/#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="/#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <div className="text-right btn btn-outline-success my-2 my-sm-0">
                <span data-toggle="modal" data-target="#modelId">
                  <span>
                    <i className="fa fa-cart-arrow-down"></i>
                    <i>({this.tinhTongSoLuong()})</i>
                    <i> Giỏ Hàng</i>
                  </span>
                </span>
              </div>
            </form>
          </div>
        </nav>
        <h1 className="text-center font-weight-bol">Danh Sach San Pham</h1>
        <CartModal tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.deleteGioHang} gioHang={this.state.gioHang} />
        <ListProducts themGioHang={this.addGioHang} />
      </div>
    );
  }
}
