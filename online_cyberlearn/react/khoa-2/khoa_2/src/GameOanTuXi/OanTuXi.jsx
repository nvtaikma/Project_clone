import React, { Component } from 'react'
import "./OanTuXi.css"
import Player from './Player'
import Robot from './Robot'
import Ketqua from './Ketqua'
import { connect } from 'react-redux'
class OanTuXi extends Component {
  render() {
    return (
    <div className=" GameOanTuXi">
        <div className="container">
        <div className="row m-4 " >
            <div className="col-4 text-center">
                <Player /> 
            </div>
            <div className="col-4 text-center">
                <Ketqua/>
                <button className='btn btn-light text-success' onClick={()=>{this.props.playGame()}}><p className='p-0 m-0'>PLAY GAME</p></button>
        


            </div>
            <div className="col-4 text-center ">
                <Robot />
            </div>
        </div>
        </div>
    </div>
    )
  }
}
 
const mapDispatchToProps = (dispatch) =>{
    return{
        playGame: ()=>{
           let count = 0;
           let randomItem = setInterval(()=>{
            let soNgauNhien = Math.floor(Math.random()*3);
            dispatch({
                type :"PLAY_GAME",
                soNgauNhien
            })
            count++;
            if(count > 10){
                clearInterval(randomItem);
                dispatch({
                    type:"END_GAME"
                })
            }
           },100)
        }
    }
}
export default connect(null,mapDispatchToProps)(OanTuXi)