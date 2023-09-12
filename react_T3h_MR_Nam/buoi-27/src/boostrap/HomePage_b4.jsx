import React from 'react'
import Carousel_b4 from './Carousel_b4'
import Category_b4 from './Category_b4'
import Header_b4 from './Header_b4'
import ProducList_b4 from './ProducList/ProducList_b4'


const HomePage_b4 = () => {
  return (
    <div >
     <Header_b4 />
        <div>
        <Carousel_b4/>
        </div>
      <div className='container'>
        <h1 className='text-center mt-5 ' style={{fontSize:45}}> PRODUCTS
        </h1>
        <div className="row mt-5">
          <div className="col-3">
            <Category_b4/>
          </div>
          <div className="col-9">
            <div className="row">
              <ProducList_b4 />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePage_b4
