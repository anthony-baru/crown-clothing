import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.style.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <div className="price">{price}</div>
    </div>
    <CustomButton className="custom-button" size="sm">
      Add to Cart
    </CustomButton>
  </div>
);

export default CollectionItem;
