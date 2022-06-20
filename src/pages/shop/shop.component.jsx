import React, { Component } from "react";
import SHOP_DATA from "../../data/082 shop.data";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";
class ShopPage extends Component {
  state = { collections: SHOP_DATA };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
