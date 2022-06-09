import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Order = () => {
    const data = [
        {
            "id": 1,
            "title": "Chicken Biryani",
            "discription": "Tender boneless chicken cooked with basmati rice finished with ginger, green chili, and coriander.",
            "slug": "chicken-biryani",
            "img": "https://samirsindiankitchen.com.au/wp-content/uploads/2020/03/Chicken-Biryani.jpg",
            "price": 299,
            "qty": 10,
            "status": "Dispatch"
        },
        {
            "id": 2,
            "title": "Korma – Lamb ,Beef, Chicken",
            "discription": "Traditional lamb curry with fresh tomatoes and spices.",
            "slug": "korma-lamb-beef-chicken",
            "img": "https://samirsindiankitchen.com.au/wp-content/uploads/2020/03/52554168.jpg",
            "price": 349,
            "qty": 5,
            "status": "Cancelled"
        },
        {
            "id": 3,
            "title": "Goat Biryani",
            "discription": "Succulent pieces of lamb cooked with basmati rice, Hyderabadi style, finished with fresh ginger, green chili, and coriander.",
            "slug": "goat-biryani",
            "img": "https://samirsindiankitchen.com.au/wp-content/uploads/2020/03/lamb-biryani.jpg",
            "price": 299,
            "qty": 8,
            "status": "Complete"

        },
    ]

    const [section, setSection] = useState(1)
    return (
        <div className='order-container'>
            <div className='page-heading'>
                <h2>Your Orders</h2>
                <p>Wait for the best meal</p>
            </div>

            <section className="section-nav-menu">
                <button className={section === 1 && "active"} onClick={() => setSection(1)}>In Progress</button>
                <button className={section === 2 && "active"} onClick={() => setSection(2)}>Past Orders</button>
            </section>

            <section className='cart-container'>
                <section className='item-in-cart'>
                    {data.map((n) => {
                        return (

                            <div className="product-card-container">
                                <img src={n.img} alt="" />
                                <div>
                                    <h2>{n.title}</h2>
                                    <p>QTY: {n.qty} <span></span> INR {n.price * n.qty}.00 <span></span> <h5 className={n.status}>{n.status}</h5></p>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </section>
        </div>
    )
}

export default Order