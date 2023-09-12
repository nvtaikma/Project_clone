import React, { Component } from 'react'
import { connect } from 'react-redux'
 class XucXac extends Component {
     render() {
    //   console.log(this.props.mangXucXac);
    return (
        <div>
            {this.props.mangXucXac.map((xucXac, index) => {
                return (
            <img className='m-2 mt-4' style={{width:100,height:100}} src={xucXac.hinhAnh} alt="1" key={index}/>

                )
            })}
            
            
      </div>
    )
  }
}

// hàm lấy dữ liệu

const mapStateToProps = (state) => {
    return {
        mangXucXac: state.TaiXiuReducer.mangXucXac,
    }
}
export default connect(mapStateToProps)(XucXac)