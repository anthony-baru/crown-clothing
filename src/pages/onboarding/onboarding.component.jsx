import React from "react";
import "./onboarding.style.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const Onboarding = () => (
  <div className="onboarding">
    <SignIn />
    <SignUp />
  </div>
);

export default Onboarding;
