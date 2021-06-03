import React from "react";
import { useSelector } from "react-redux";
import {
  AiOutlineArrowsAlt,
  AiOutlineHeart,
  AiOutlineShopping,
} from "react-icons/ai";

const ProductComponent = () => {
  const products = useSelector((state) => state.allproducts.products);
  // console.log("test98", products);
  // const { id, title } = products[0];
  return (
    <div className="card-container">
      {products &&
        products.map((product) => (
          <div className="card">
            <div className="image">
              <img
                src={product.image}
                width="200px"
                height="200px"
                style={{ objectFit: "scale-down" }}
                // height="80%"
                alt={product.title}
              />
              <div className="card-icon">
                <AiOutlineArrowsAlt className="arrow" />
                <AiOutlineHeart className="arrow" />
                <AiOutlineShopping className="arrow" />
              </div>
            </div>

            <div className="title">{product.title}</div>
            <div className="price">{product.price}</div>
          </div>
        ))}
    </div>
  );
};

export default ProductComponent;
