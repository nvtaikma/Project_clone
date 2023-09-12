import React from 'react'
import "./productItem_b4.css"

const ProductItem_b4 = (props) => {
    // let {dataItem} = props;
    console.log("dataItem", props.dataItem)
    const renderItem = ()=>{
        return props.dataItem.map((item,index)=>{
            return  <div className="product-item cold-4" key={index}>
            <img src={item.image} alt="thumb_product.png" />
            <h2>{item.title}</h2>
            <p>{item.spaceForProduct} </p>
            <div className="p__infor">
              <h2>{item.price} USD</h2>
              <button onClick={(e) =>{}}>Buy now</button>
            </div>
          </div>
          
        })
    }
  return (
    <>
      {
        renderItem()
      }
    </>
  )
}

export default ProductItem_b4
