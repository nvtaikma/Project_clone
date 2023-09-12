import React, { Component } from 'react'
import ProducList from './ProducList'
import DataJson from '../Data/data.json'
import testcss from "./testcss.css"
export default class AppProps extends Component {
    
  render() {
    
    return (
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-4'>
            
                <div className="nav flex-column nav-pills justify-content-center" style={{minHeight:500}} id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active" id="home-tab" data-toggle="pill" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                    <a className="nav-link" id="shop-tab" data-toggle="pill" href="#shop" role="tab" aria-controls="shop" aria-selected="false">Profile</a>
                </div>
                
            </div>

            
            <div className='col-8 productList'>
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <ProducList ArrayProduct={DataJson} />
                    </div>
                    <div className="tab-pane fade" id="shop" role="tabpanel" aria-labelledby="shop-tab">shop</div>
                </div>
                
            </div>

        </div>
        </div>

    )
  }
}
