import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>

      <span className="price">{price}</span>

      <span className="quantity">
        <div className="arrow">
          <ChevronLeftIcon onClick={() => removeItem(cartItem)} />
        </div>

        {quantity}

        <div className="arrow">
          <ChevronRightIcon onClick={() => addItem(cartItem)} />
        </div>
      </span>

      <div className="remove-button">
        <DeleteOutlineIcon onClick={() => clearItem(cartItem)} />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
