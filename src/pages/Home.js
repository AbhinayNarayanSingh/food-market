import React from 'react'
import { Link } from 'react-router-dom'
import Header from "./components/Header"

const Home = () => {

    const data = [
        {
            "id": 1,
            "title": "Chicken Biryani",
            "discription": "Tender boneless chicken cooked with basmati rice finished with ginger, green chili, and coriander.",
            "slug": "chicken-biryani",
            "img": "https://samirsindiankitchen.com.au/wp-content/uploads/2020/03/Chicken-Biryani.jpg"
        },
        {
            "id": 2,
            "title": "Korma – Lamb ,Beef, Chicken",
            "discription": "Traditional lamb curry with fresh tomatoes and spices.",
            "slug": "korma-lamb-beef-chicken",
            "img": "https://samirsindiankitchen.com.au/wp-content/uploads/2020/03/52554168.jpg"
        },
        {
            "id": 3,
            "title": "Goat Biryani",
            "discription": "Succulent pieces of lamb cooked with basmati rice, Hyderabadi style, finished with fresh ginger, green chili, and coriander.",
            "slug": "goat-biryani",
            "img": "https://samirsindiankitchen.com.au/wp-content/uploads/2020/03/lamb-biryani.jpg"
        },
    ]
    return (
        <div className='home-page'>
            <Header />

            <div className="hero">

                {data.map((n) => {
                    return (
                        <div className="hero-card-container" key={n.id}>
                            <Link to={n.slug}>
                                <img src={n.img} alt="" />
                                <div>
                                    <h2>{n.title}</h2>

                                    <p>{n.discription}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Home