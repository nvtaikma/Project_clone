import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import TaiXiuReducer from "./TaiXiuReducer";
import OanTuTiReducer from "./OanTuTiReducer";
import BaiTapDatVeReducer from "./reducer/BaiTapDatVeReducer"

const rootReducer = combineReducers({ //store tổng của ứng dụng
    stateGioHang : CartReducer, //state giỏ hàng
    TaiXiuReducer,
    OanTuTiReducer,
    BaiTapDatVeReducer

    

    
})

export default rootReducer;