import React from "react";
// import { Link } from "react-router-dom";
import Input from "./components/Input";
import PageHeading from "./components/PageHeading";

const SignUp = () => {
  return (
    <div className="sign-container">
      <PageHeading h2="Sign Up" p="Register and eat" />

      <form>
        <Input
          type="text"
          label="Full Name"
          placeholder="Type your full name"
          id=""
          value={""}
          setValue={""}
        />
        <Input
          type="email"
          label="Email Address"
          placeholder="Type your email address"
          id=""
          value={""}
          setValue={""}
        />
        <Input
          type="text"
          label="Phone No."
          placeholder="Type your phone number"
          id=""
          value={""}
          setValue={""}
        />
        <Input
          type="password"
          label="Password"
          placeholder="Type your password"
          id=""
          value={""}
          setValue={""}
        />
        <Input
          type="password"
          label="Confirm Password"
          placeholder="Type your password again"
          id=""
          value={""}
          setValue={""}
        />

        <button>Continue</button>
      </form>
      {/* <Link to="/">
        <button>Create New Account</button>
      </Link> */}
    </div>
  );
};

export default SignUp;
