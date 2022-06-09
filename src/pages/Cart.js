import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {

    const data = [
        {
            "id": 1,
            "title": "Chicken Biryani",
            "discription": "Tender boneless chicken cooked with basmati rice finished with ginger, green chili, and coriander.",
            "slug": "chicken-biryani",
            "img": "https://samirsindiankitchen.com.au/wp-content/uploads/2020/03/Chicken-Biryani.jpg",
            "price": 299,
        },
        {
            "id": 2,
            "title": "Korma – Lamb ,Beef, Chicken",
            "discription": "Traditional lamb curry with fresh tomatoes and spices.",
            "slug": "korma-lamb-beef-chicken",
            "img": "https://samirsindiankitchen.com.au/wp-content/uploads/2020/03/52554168.jpg",
            "price": 349
        },
        {
            "id": 3,
            "title": "Goat Biryani",
            "discription": "Succulent pieces of lamb cooked with basmati rice, Hyderabadi style, finished with fresh ginger, green chili, and coriander.",
            "slug": "goat-biryani",
            "img": "https://samirsindiankitchen.com.au/wp-content/uploads/2020/03/lamb-biryani.jpg",
            "price": 299
        },
    ]

    const customer = {
        "name": "Abhinay Narayan Singh",
        "contact": "+91 8795675599",
        "building": "Aashirvad Niketan, Seer Goverdhanpur",
        "city": "Varanasi",
        "state": "Uttar Pradesh",
        "pin": "221005"

    }

    return (
        <div className='cart-container'>
            <div className='page-heading'>
                <h2>Checkout</h2>
                <p>Just one step away</p>
            </div>
            <p className='cart-heading'>Item in Cart</p>
            <section className='item-in-cart'>
                {data.map((n) => {
                    return (

                        <div className="product-card-container">
                            <img src={n.img} alt="" />
                            <div>
                                <h2>{n.title}</h2>
                                <p>INR {n.price}.00</p>
                            </div>
                            <h3><Link to="?"><i class="fa-solid fa-trash"></i></Link></h3>
                        </div>
                    )
                })}
            </section>

            <p className='cart-heading'>Details Transaction</p>

            <section className="transaction-detail">
                <p><span>Sub Total</span> <span>850.00 INR</span></p>
                <p><span>Delivery</span> <span>50.00 INR</span></p>
                <p><span>Tax</span> <span>90.00 INR</span></p>
                <h2><span>Total Price</span><span>990.00 INR</span></h2>
            </section>

            <p className='cart-heading'>Deliver to:</p>

            <section className="transaction-detail">
                <p><span>Name</span> <span>{customer.name}</span></p>
                <p><span>Phone No.</span> <span>{customer.contact}</span></p>
                <p><span>Address</span> <span>{customer.building}</span></p>
                <p><span>City</span> <span>{customer.city}</span></p>
                <p><span>State</span> <span>{customer.state}</span></p>
                <p><span>Pincode</span> <span>{customer.pin}</span></p>
            </section>

            <Link to="/order">
                <button>Place Order</button>
            </Link>
        </div>
    )
}

export default Cart