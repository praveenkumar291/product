import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("Err", error);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  });
  // console.log("Products: ", products);
  return (
    <div className="grid-container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
