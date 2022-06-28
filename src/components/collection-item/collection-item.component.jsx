import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { toast } from "react-toastify";
import "./collection-item.style.scss";

const CollectionItem = ({ item, addItem }) => {
  // const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <div className="price">{item.price}</div>
      </div>
      <CustomButton
        className="custom-button"
        size="sm"
        onClick={() => {
          toast.success(`${item.name} added to cart.`);
          return addItem(item);
        }}
      >
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapActionToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapActionToProps)(CollectionItem);
