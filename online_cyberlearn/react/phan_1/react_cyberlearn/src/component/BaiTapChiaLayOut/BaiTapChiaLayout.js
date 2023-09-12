import React, { Component } from 'react'
import Content1 from './Content1'
import Content2 from './Content2'
import Footer from './Footer'
import HeaderDemo from './HeaderDemo'


export default class BaiTapChiaLayout extends Component {
    render() {
        let style = {
            margin: 0,
            padding:0,
        }
      return (
        
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12' style={style}>
                        <HeaderDemo />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4' style={style}>
                        <Content1 />
                      </div>
                      <div className='col-8' style={style}>
                        <Content2 />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12' style={style}>
                        <Footer />
                    </div>
                </div>
            </div>
            
      </div>
    )
  }
}
