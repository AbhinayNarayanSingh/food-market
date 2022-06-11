import React from "react";
import { Link } from "react-router-dom";
import Input from "./components/Input";
import PageHeading from "./components/PageHeading";

const SignIn = () => {
  return (
    <div className="sign-container">
      <PageHeading h2="Sign In" p="Find your best ever meal" />

      <form>
        <Input
          type="email"
          label="Email Address"
          placeholder="Type your email address"
          id=""
          value={""}
          setValue={""}
          // alert={true}
        />
        <Input
          type="password"
          label="Password"
          placeholder="Type your password"
          id=""
          value={""}
          setValue={""}
        />

        <button>Sign In</button>
      </form>
      <Link to="/sign-up">
        <button>Create New Account</button>
      </Link>

      <Link to="/reset-password">
        <p>Reset Password</p>
      </Link>
    </div>
  );
};

export default SignIn;
