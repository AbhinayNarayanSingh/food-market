import React, { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [section, setSection] = useState(1);
  return (
    <div className="profile-container">
      <section className="profile-image-section">
        <div className="img-container">
          <img
            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=996&t=st=1654756356~exp=1654756956~hmac=8c850aee89050e80d865c7f9abbca76c0235a90141889a19073903a6ba4a098a"
            alt=""
          />
        </div>
        <h2>Abhinay Narayan Singh</h2>
        <p>wepanda@gmail.com</p>
      </section>

      <section className="section-nav-menu">
        <button
          className={section === 1 && "active"}
          onClick={() => setSection(1)}
        >
          Account
        </button>
        <button
          className={section === 2 && "active"}
          onClick={() => setSection(2)}
        >
          FoodMarket
        </button>
      </section>

      {section === 1 ? (
        <section className="profile-menu">
          <Link to="/cart">
            Cart <span>></span>
          </Link>
          <Link to="/order">
            Order <span>></span>
          </Link>
          <Link to="">
            Saved Address <span>></span>
          </Link>
          <Link to="">
            Change password <span>></span>
          </Link>
          <Link to="/sign-in">
            Logout <span>></span>
          </Link>
        </section>
      ) : (
        <section className="profile-menu">
          <Link to="">
            Refer <span>></span>
          </Link>
          <Link to="">
            Rate App <span>></span>
          </Link>
          <Link to="">
            Help Center <span>></span>
          </Link>
          <Link to="">
            Privacy & Policy <span>></span>
          </Link>
          <Link to="">
            Terms & Conditions <span>></span>
          </Link>
        </section>
      )}
    </div>
  );
};

export default Profile;
