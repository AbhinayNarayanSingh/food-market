import React from 'react'
import { Link } from 'react-router-dom'
import ProductRatingStar from "./components/ProductRatingStar"

const IndividualProduct = () => {
    const data = {
        "id": 1,
        "title": "Chicken Biryani",
        "discription": "Tender boneless chicken cooked with basmati rice finished with ginger, green chili, and coriander.",
        "slug": "chicken-biryani",
        "img": "https://samirsindiankitchen.com.au/wp-content/uploads/2020/03/Chicken-Biryani.jpg",
        "rating": 3.4,
        "ingredients": "Boneless chicken, basmati rice, keshar, masala"
    }




    return (
        <div className='IndividualProduct'>
            <img src={data.img} alt="" />
            <div className="product-detail">
                <h2>{data.title}</h2>
                <div className="review">
                    <ProductRatingStar data={data.rating} />
                    <h3>
                        {data.rating}/5
                    </h3>
                </div>
                <p>{data.discription}</p>

                <div className="ingredients">
                    <h2>Ingredients:</h2>
                    <p>{data.ingredients}</p>
                </div>

                <div className="action">
                    <div>
                        <h4>Total Price:</h4>
                        <h3>INR 499.00</h3>
                    </div>
                    <Link to="/cart">
                        <button>Order Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default IndividualProduct