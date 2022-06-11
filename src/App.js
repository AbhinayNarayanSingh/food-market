import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import IndividualProduct from "./pages/IndividualProduct";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
// import Alert from "./pages/components/Alert";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="mobile-view-container">
      <div className="container">
        <Link to="/" className="go-to-home">
          <i className="fa-solid fa-house"></i>
        </Link>
        {/* <Alert type={"success"} msg={"Password Change Successfully"} /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<IndividualProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
