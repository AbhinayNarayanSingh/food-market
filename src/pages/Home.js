import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./components/ProductCard";

const Home = () => {
  const data = [
    {
      id: 1,
      title: "Chicken Biryani",
      discription:
        "Tender boneless chicken cooked with basmati rice finished with ginger, green chili, and coriander.",
      slug: "chicken-biryani",
      img: "https://samirsindiankitchen.com.au/wp-content/uploads/2020/03/Chicken-Biryani.jpg",
      price: 299,
    },
    {
      id: 2,
      title: "Korma – Lamb ,Beef, Chicken",
      discription: "Traditional lamb curry with fresh tomatoes and spices.",
      slug: "korma-lamb-beef-chicken",
      img: "https://samirsindiankitchen.com.au/wp-content/uploads/2020/03/52554168.jpg",
      price: 299,
    },
    {
      id: 3,
      title: "Goat Biryani",
      discription:
        "Succulent pieces of lamb cooked with basmati rice, Hyderabadi style, finished with fresh ginger, green chili, and coriander.",
      slug: "goat-biryani",
      img: "https://samirsindiankitchen.com.au/wp-content/uploads/2020/03/lamb-biryani.jpg",
      price: 299,
    },
    {
      id: 4,
      title: "Chicken Biryani",
      discription:
        "Tender boneless chicken cooked with basmati rice finished with ginger, green chili, and coriander.",
      slug: "chicken-biryani",
      img: "https://samirsindiankitchen.com.au/wp-content/uploads/2020/03/Chicken-Biryani.jpg",
      price: 299,
    },
  ];

  const [section, setSection] = useState(1);
  return (
    <div className="home-page">
      <header>
        <div
          style={{
            marginLeft: "3rem",
          }}
        >
          <Link to="/">
            <h2>FoodMarket</h2>
          </Link>
          <p>Let’s get some foods</p>
        </div>
        <Link to="/sign-in">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
          />
        </Link>
      </header>

      <div className="hero">
        {data.map((n) => {
          return (
            <div className="hero-card-container" key={n.id}>
              <Link to={n.slug}>
                <img src={n.img} alt="" />
                <div>
                  <h2>{n.title}</h2>

                  <p>{n.discription}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <section className="section-nav-menu">
        <button
          className={section === 1 && "active"}
          onClick={() => setSection(1)}
        >
          New Taste
        </button>
        <button
          className={section === 2 && "active"}
          onClick={() => setSection(2)}
        >
          Popular
        </button>
        <button
          className={section === 3 && "active"}
          onClick={() => setSection(3)}
        >
          Recommended
        </button>
      </section>

      <section className="section-2-product-list">
        {data.map((n) => {
          return <ProductCard n={n} screen="home" />;
        })}
      </section>
    </div>
  );
};

export default Home;
