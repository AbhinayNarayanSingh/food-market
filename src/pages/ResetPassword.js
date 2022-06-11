import React, { useState } from "react";
import Input from "./components/Input";
import PageHeading from "./components/PageHeading";

const ResetPassword = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  console.log(enteredEmail);

  return (
    <div className="sign-container">
      <PageHeading h2="Reset Password" p="Forgot your password, don't worry" />

      <form>
        <Input
          type="email"
          label="Email Address"
          placeholder="Type your email address"
          id="enteredEmail"
          value={enteredEmail}
          setValue={setEnteredEmail}
        />

        <button>Continue</button>
      </form>

      <form>
        <Input
          type="text"
          label="Verification Code"
          placeholder="Type your 6 digit verification code"
          id="1"
          value={""}
          setValue={""}
        />

        <Input
          type="password"
          label="Password"
          placeholder="Type your password"
          id="2"
          value={""}
          setValue={""}
        />
        <Input
          type="password"
          label="Confirm Password"
          placeholder="Type your password again"
          id="3"
          value={""}
          setValue={""}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default ResetPassword;
