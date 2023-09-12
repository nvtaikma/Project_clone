import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "productSlice/fetchData",
  async (url) => {
      const { data } = await axios.get(url);
      return data;
  }
)

export const deleteProduct = createAsyncThunk(
  "productSlice/deleteData",
  async ({ url, id }) => {
      const { data } = await axios.delete(`${url}/${id}`);
      return data;
  }
);

export const createProduct = createAsyncThunk(
  "productSlice/createProduct",
  async ({ url, newItem }) => {
      const { data } = await axios.post(
              `${url}`,
              {
                 ...newItem,
              }
            );
  }
);

