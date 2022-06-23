import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { toast } from "react-toastify";
import "./sign-up.styles.scss";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';


class SignUp extends Component {
  state = { displayName: "", email: "", password: "", confirmPassword: "",loading:false };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span className="">Sign up with your email and password</span>
        <form action="" className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          ></FormInput>

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          ></FormInput>
          <CustomButton loading={this.state.loading} startIcon={<AppRegistrationIcon/>} type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { displayName, email, password, confirmPassword } = this.state;
        this.setState({ loading: true });
      if (password !== confirmPassword) {
        toast.error("Passwords do not match.");
        return;
      }
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        loading: false,
      });
      toast.success(`Registration successful. You can login.`);
    } catch (e) {
      this.setState({ loading: false });
      toast.error(`Error occurred ${e.message}`);
    }
  };
}

export default SignUp;
