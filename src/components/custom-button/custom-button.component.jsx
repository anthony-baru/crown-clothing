import React from "react";
import "./custom-button.styles.scss";
// import Button from "@mui/material/Button";

import LoadingButton from "@mui/lab/LoadingButton";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <LoadingButton
    loadingPosition={"center"}
    variant="contained"
    size={"large"}
    color={isGoogleSignIn ? "primary" : "secondary"}
    {...otherProps}
  >
    {children}
  </LoadingButton>
  // <button
  //   className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
  //   {...otherProps}
  // >
  //   {children}
  // </button>
);

export default CustomButton;
