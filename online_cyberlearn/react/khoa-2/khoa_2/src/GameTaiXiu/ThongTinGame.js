import React, { Component } from 'react'
import { connect } from 'react-redux'
class ThongTinGame extends Component {
  render() {
    return (
        <div>
            <div className='display-4'>
                Bạn chọn: <span className='text-success'>{this.props.TaiXiu ? "Tài" : "Xỉu"}</span>
            </div>
            <div className='display-4'>
                Bạn Thắng: <span className='text-success'>{this.props.soBanThang }</span>
            </div>
            <div className='display-4'>
                Game đã chơi: <span className='text-success'>{ this.props.tongSoGame}</span>
            </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        TaiXiu: state.TaiXiuReducer.taiXiu,
        soBanThang: state.TaiXiuReducer.soBanThang,
        tongSoGame:state.TaiXiuReducer.tongSoBanChoi
    }
}
export default connect(mapStateToProps)(ThongTinGame)