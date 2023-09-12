import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {
    rederItem = () => {
        return this.props.productList.map((item, index) => {
            return <div className='col-3' key={index}>

                {/* xemChiTiet={ this.props.xemChiTiet} truyền tiếp funtion "producDetail" xuống ProducItem */}
                <ProductItem Item={item} xemChiTiet={ this.props.xemChiTiet} />
            </div>
        })
    }
    render() {
    return (
        <div className='container'>
            <div className='row'>
            {this.rederItem()}
      </div>
        </div>
    )
  }
}
