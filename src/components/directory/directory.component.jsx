import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";
class Directory extends Component {
  state = {
    sections: [
      { id: 1, title: "hats", imageUrl: "https://i.ibb.co/GCCdy8t/hats.png" },
      {
        id: 2,
        title: "jackets",
        imageUrl: "https://i.ibb.co/GCCdy8t/jackets.png",
      },
      {
        id: 3,
        title: "sneakers",
        imageUrl: "https://i.ibb.co/GCCdy8t/sneakers.png",
      },
      {
        id: 4,
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
      },
      {
        id: 5,
        title: "mens",
        imageUrl: "https://i.ibb.co/GCCdy8t/mens.png",
        size: "large",
      },
    ],
  };
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
