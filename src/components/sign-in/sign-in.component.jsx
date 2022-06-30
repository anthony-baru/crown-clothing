import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";
import { toast } from "react-toastify";
import GoogleIcon from '@mui/icons-material/Google';
import LoginIcon from '@mui/icons-material/Login';


class SignIn extends Component {
  state = {
    email: "",
    password: "",
    loading:false
  };

  handleSubmit = async(e) => {
    e.preventDefault();
    const {email, password} = this.state;
    try {
      this.setState({loading:true});
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "",loading:false });
      toast.success("Successfully signed in!");
    } catch (error) {
      console.log(error.message);
      this.setState({ loading: false });
        toast.error(error.message);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account.</h2>
        <span>Sign in with your email and password.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          ></FormInput>
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          ></FormInput>
          <div className="buttons">
            <CustomButton loading={this.state.loading} type="submit" value="Submit" startIcon={<LoginIcon/>} >
              Sign In
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn startIcon={<GoogleIcon/>}>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
