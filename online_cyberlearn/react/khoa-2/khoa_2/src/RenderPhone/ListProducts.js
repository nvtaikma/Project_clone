import React, { Component } from "react";
import ProductDetail from "./ProductDetail";

export default class ListProducts extends Component {
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "../img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "../img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "../img/applephone.jpg",
    },
  ];
  state = {
    sanPhamChiTiet: {
    },
    
}

  renderSanPham = () => {
    return this.mangSanPham.map((sanpham, index) => {
      return (
        <div className="col-4 text-center" key={index}>
          <ProductDetail sanphamRender={sanpham} chiTietSanPham={this.xemChiTiet} themGioHang={ this.props.themGioHang} />
          
        </div>
      );
    });
  };

  xemChiTiet = (sanphamRender) => {
    this.setState({
      sanPhamChiTiet: sanphamRender,
      showStore: true,
    })
  }
  closeChiTiet = () => {
    this.setState({
      showStore: false,
    })
  }
  render() {
    // console.log(this.mangSanPham)
    return <div className="container mt-5">
      
      <div className="row">
      {this.renderSanPham()}
      </div>

      
      {/* chi tiết sản phẩm */}
      <div className="row mt-5 justify-content-center" >
        <div className="col-8  " style={{display: this.state.showStore ? 'block' : 'none' }}>
          <div className="row">
          <div className="col-4">
          <h3 className="font-weight-bol text-center">{this.state.sanPhamChiTiet.tenSP}</h3>
          <img src={this.state.sanPhamChiTiet.hinhAnh} alt={this.state.sanPhamChiTiet.tenSp} style={{width:200}} />
        </div>
        <div className="col-8">
          <h3>Chi Tiet San Pham</h3>
          <table className="table font-weight-bol">
            <thead>
              <tr>
                <th>Màn hình</th>
                <th>{this.state.sanPhamChiTiet.manHinh }</th>
              </tr>
              <tr>
                <th>Hệ điều hành</th>
                <th>{this.state.sanPhamChiTiet.heDieuHanh }</th>
              </tr>
              <tr>
                <th>Camera sau</th>
                <th>{this.state.sanPhamChiTiet.cameraSau }</th>
              </tr>
              <tr>
                <th>Camera trước</th>
                <th>{this.state.sanPhamChiTiet.cameraTruoc }</th>
              </tr>
              <tr>
                <th>Ram</th>
                <th>{this.state.sanPhamChiTiet.ram }</th>
              </tr>
              <tr>
                <th>Rom</th>
                <th>{this.state.sanPhamChiTiet.rom }</th>
              </tr>
             
              
            </thead>
            
            
          </table>
        </div>
          </div>
          <div className="row justify-content-center ">
        <button className="btn btn-dark" onClick={()=>{this.closeChiTiet()}}>close</button>

          </div>
        </div>
      </div>
    </div>;
  }
}
