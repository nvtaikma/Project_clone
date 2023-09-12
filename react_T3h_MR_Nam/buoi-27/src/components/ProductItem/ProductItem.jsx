import React from "react";
import "./ProductItem.css";
import { useDispatch } from "react-redux";
import { createProduct } from "../../store/createAsyncThunk"
const ProductItem = (props) => {
  const url = "https://63a44da8821953d4f2b0523b.mockapi.io/gioHang"
  const dispatch = useDispatch()

  const handleCreateProduct = (e) => {
    const item = {
      title: props.title,
      spaceForProduct: props.spaceForProduct,
      price: props.price,
      discount: props.discount,
      image: props.image
    };
    dispatch(
      createProduct({
        url: url,
        newItem: item,
      })
    )
  }

  
  return (
    <div className="product-item">
      <img src={props.image} alt="thumb_product.png" />
      <h2>{props.title}</h2>
      <p>{props.spaceForProduct} </p>
      <div className="p__infor">
        <h2>{props.price} USD</h2>
        <button onClick={(e) =>handleCreateProduct(e)}>Buy now</button>
      </div>
    </div>
  );
};

export default ProductItem;
