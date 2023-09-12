import { render } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItem_b4 from "./ProductItem_b4";
import "./productItem_b4.css"


const ProducList_b4 = () => {
  const [data, setData] = useState("");
  const fectListData = async ()=>{
    axios.get('https://63a44da8821953d4f2b0523b.mockapi.io/product')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    // const {data} = await axios.get("https://63a44da8821953d4f2b0523b.mockapi.io/product");
    // console.log(data);
  }
  console.log("data", data)
  useEffect(()=>{
    fectListData();
  },[])
   
  return (
    <>
      
        <ProductItem_b4 dataItem={data}/>
        {/* {
          renderData()
        } */}
      
    </>
  );
};

export default ProducList_b4;
