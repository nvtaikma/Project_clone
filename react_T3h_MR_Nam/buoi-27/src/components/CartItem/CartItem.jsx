import React from "react";
import "./CartItem.css";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/createAsyncThunk";

const CartItem = (props) => {

  const url = "https://63a44da8821953d4f2b0523b.mockapi.io/gioHang"
  const dispatch = useDispatch()
  const handleDeleteProduct = (id) => {
    dispatch(
      deleteProduct({
        url: url,
        id: id,
      })
    )
  }

  return (
    <div className="CartItem_container">
      <div className="cart-item">
        <img src={props.image} alt="thumb_cart_item.png" />
        <div className="cart-product-item-infor">
          <h3>{props.title}</h3>
          <div>
            <span>Farm:</span>
            <p>Tharamis Farm</p>
          </div>
          <div>
            <span>Freshness:</span>
            <p>1 day old</p>
          </div>
        </div>
      </div>

      <div className="cart-item">
        <div className="cart-bonous-item">
          <div>
            <img src="/icons/wishlist.svg" alt="wishlist" />
            <span>Wishlist</span>
          </div>
          <div>
            <img src="/icons/compare.svg" alt="compare" />
            <span>Compare</span>
          </div>
          <div>
            <img src="/icons/remove.svg" alt="compare" />
            <span onClick={(id) => handleDeleteProduct(props.id)}><button style={{width:50, height:30}}>xóa</button></span>
          </div>
        </div>
        <div className="c-product-price-container">
          <img src="/icons/rate-review.svg" alt="rate-review" />
          <div className="cart-product-price">
            <div className="c-product-price">
              <h2>{props.price}</h2>
              <h3>{props.discount}</h3>
            </div>
            <div className="c-product-unit">
              <input type="text" placeholder="1pcs" />
              <div>
                Pcs{" "}
                <img src="/icons/down_green_arrow.svg" alt="down_green_arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
