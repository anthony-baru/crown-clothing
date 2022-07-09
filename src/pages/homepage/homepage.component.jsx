import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

const Homepage = () => {
  return (
    <div className="homepage">
      {console.log(process.env)}
      <Directory />
    </div>
  );
};

export default Homepage;
