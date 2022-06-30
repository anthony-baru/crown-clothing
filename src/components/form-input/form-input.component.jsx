import React from "react";
import "./form-input.styles.scss";
import {TextField} from "@mui/material";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
      <TextField fullWidth={true} label={label} variant="standard" size="medium" onChange={handleChange} {...otherProps}></TextField>
    {/*<input className="form-input" onChange={handleChange} {...otherProps} />*/}
    {/*{label ? (*/}
    {/*  <label*/}
    {/*    className={`${*/}
    {/*      otherProps.value.length ? "shrink" : ""*/}
    {/*    } form-input-label`}*/}
    {/*  >*/}
    {/*    {label}*/}
    {/*  </label>*/}
    {/*) : null}*/}
  </div>
);

export default FormInput;
