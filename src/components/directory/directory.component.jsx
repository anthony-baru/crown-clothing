import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";
class Directory extends Component {
  state = {
    sections: [
      {
        id: 1,
        title: "hats",
        imageUrl: "https://i.ibb.co/GCCdy8t/hats.png",
        linkUrl: "hats",
      },
      {
        id: 2,
        title: "jackets",
        imageUrl: "https://i.ibb.co/GCCdy8t/jackets.png",

        linkUrl: "jackets",
      },
      {
        id: 3,
        title: "sneakers",
        imageUrl: "https://i.ibb.co/GCCdy8t/sneakers.png",

        linkUrl: "sneakers",
      },
      {
        id: 4,
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",

        linkUrl: "womens",
      },
      {
        id: 5,
        title: "mens",
        imageUrl: "https://i.ibb.co/GCCdy8t/mens.png",
        size: "large",

        linkUrl: "mens",
      },
    ],
  };
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
