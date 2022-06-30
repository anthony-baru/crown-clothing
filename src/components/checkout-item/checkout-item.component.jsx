import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{price}</span>
    <span className="price">{quantity}</span>
    <div className="remove-button">
      <DeleteOutlineIcon />
    </div>
  </div>
);

export default CheckoutItem;
