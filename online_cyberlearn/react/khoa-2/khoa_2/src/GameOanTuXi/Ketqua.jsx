import React, { Component } from 'react'
import { connect } from 'react-redux'

class Ketqua extends Component {
  render() {
    return (
      <div className='text-center'>
        <div className='display-4 text-white'>
                {this.props.KetQua}
            </div>
            <div className=' text-white' style={{fontSize:"30px"}}>
                Bạn Thắng: <span className='text-success'>{this.props.sobanThang}</span>
            </div>
            <div className='text-white mb-5' style={{fontSize:"30px"}}>
                Game đã chơi: <span className='text-success'>{this.props.soBanChoi}</span>
            </div>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    KetQua : state.OanTuTiReducer.ketQua,
    sobanThang : state.OanTuTiReducer.sobanThang,
    soBanChoi : state.OanTuTiReducer.soBanChoi
  }
}


export default connect(mapStateToProps)(Ketqua)