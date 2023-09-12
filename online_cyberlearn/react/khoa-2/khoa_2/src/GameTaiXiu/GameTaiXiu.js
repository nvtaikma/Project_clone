import React, { Component } from 'react'
import "./GameTaiXiu.css"
import XucXac from './XucXac'
import ThongTinGame from './ThongTinGame'
import { connect } from 'react-redux'

 class GameTaiXiu extends Component {
  render() {
    return (
        <div className='game'>
            <div className='title-game text-center mt-5 display-3'>
                Game Tài xỉu
            </div>
            <div className='row text-center mt-5'>
                <div className='col-4 text-right'>
                    <button className='btn p-5 btnGame ' onClick={()=>{this.props.chonTaiXiu(true)}}>Tài</button>
                </div>
                <div className='col-4'>
                    <XucXac />
                </div>
                <div className='col-4 text-left '>
                <button className='btn p-5 btnGame  ' onClick={()=>{this.props.chonTaiXiu(false)}} >Xỉu</button>

                </div>
            </div>

            <div className='text-center mt-5'>
                <ThongTinGame />
                <button className='btn btn-success' onClick={()=>{this.props.playGame()}}>PLAY GAME</button>
            </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chonTaiXiu: (taixiu) => {
            let action = {
                type: "CHON_TAI_XIU",
                taixiu
            }
            console.log(action);
            dispatch(action)
        },
        playGame: () => {
            let action = {
                type:"PLAY_GAME"
            }
            dispatch(action)
        }
    }
}
export default connect(null,mapDispatchToProps)(GameTaiXiu)