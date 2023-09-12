// setup giỏ hàng trên store

const stateGioHang = {
  gioHang: [{ maSP: 5, hinhAnh: "", tenSP: "test 1", soLuong: 1, gia: 2 }],
};

const CartReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    // thêm giỏ hàng
    case "THEM_GIO_HANG":
      {
        console.log("redux", action.spGioHang);
        let index = state.gioHang.findIndex(
          (spGH) => spGH.maSP === action.spGioHang.maSP
        );
        console.log(index);
        if (index !== -1) {
          state.gioHang[index].soLuong += 1;
        } else {
          state.gioHang.push(action.spGioHang);
        }
        // cập nhập giỏ hàng
        state.gioHang = [...state.gioHang];
        return { ...state };
      }
      break;

    // xóa giỏ hàng
    case "XOA_GIO_HANG":
      {
        let gioHangCapNhap = [...state.gioHang];

        let index = gioHangCapNhap.findIndex(
          (spGH) => spGH.maSP === action.maSP
        );

        if (index !== -1) {
          gioHangCapNhap.splice(index, 1);
        }
        // cập nhập giỏ hàng giỏ hàng mới để component reder lại giao dien
        state.gioHang = gioHangCapNhap;
        return { ...state };
      }break;

    case "TANG_GIAM_SO_LUONG": {
      let gioHangCapNhap = [...state.gioHang];

      let index = gioHangCapNhap.findIndex((spGH) => spGH.maSP === action.maSP);

      if (action.tangGiam) {
        gioHangCapNhap[index].soLuong += 1;
      } else {
        if (gioHangCapNhap[index].soLuong > 1) {
          gioHangCapNhap[index].soLuong -= 1;
        } else {
          gioHangCapNhap.splice(index, 1);
          // alert("sản phẩm tối thiểu là 1")
        }
      }
      state.gioHang = gioHangCapNhap;
      return { ...state };
      break;
    }
    default:
      return { ...state };
  }
};

export default CartReducer;
