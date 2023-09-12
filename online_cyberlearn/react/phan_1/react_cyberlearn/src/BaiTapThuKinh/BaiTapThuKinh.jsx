import React, { Component } from 'react'
import dataGlasses from "../data/dataGlasses.json"
import style from "./BaiTapThuKinh.module.css"
export default class BaiTapThuKinh extends Component {
    state = {
        glasses:{
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }
    renderGlasses = () =>{
        return dataGlasses.map((item,index)=>{
            return (
                <div className="col-4 p-3 text-center" key={index}>
                    <img className='w-50 img-fluid' src={item.url} alt="urlv" onClick = {() => {this.changeGalasses(item)}} />
                </div>
            )
        })
    }
    changeGalasses = (item) =>{
        this.setState({
            glasses: item,
        })
    }
  render() {
    
    return (
      <div className = {` ${style.bgImg} `} style={{backgroundImage:"url(./glassesImage/background.jpg)",}} >
        <div className={` ${style.overplay}`}>
            <div className="container">
            <h1 className={style.title}>Bài tập thay kính</h1>
            <div className='row justify-content-around '>
                <div className="col-2  position-relative p-0">
                    <img className='w-100 ' src="./glassesImage/model.jpg" alt="model" />
                    <img className={` position-absolute ${style.img}`} src={this.state.glasses.url} alt="model" />
                    <div className={`position-absolute ${style.info}`}>
                        <h3 className={style.name}>{this.state.glasses.name}</h3>
                        <p>
                            {this.state.glasses.desc.length > 20 ? <p>{`${this.state.glasses.desc.substring(0,30)} ...`}</p> : <p>{this.state.glasses.desc}</p>}
                        </p>
                        </div>

                </div>
                <div className="col-2 ">
                    <img className='w-100' src="./glassesImage/model.jpg" alt="model" />
                </div>
            </div>
            <div className="row mt-5 bg-light w-50 mx-auto">
                {this.renderGlasses()}
            </div>
            </div>
        </div>
      </div>
    )
  }
}
