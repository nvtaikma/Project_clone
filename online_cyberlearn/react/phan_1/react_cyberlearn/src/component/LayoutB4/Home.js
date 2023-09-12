import React, { Component } from 'react'
import Banner from './body/Banner'
import Body from './body/Body'
import Item from './body/Item'
import Footter from './Footter'
import Header from './Header'

export default class Home extends Component {
  render() {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <Header />
                    </div>
                </div> 
            </div>
            
            <div className='container'>
                <Body />
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <Footter />
                    </div>
                </div> 
            </div>
        </div>
        
    )
  }
}
