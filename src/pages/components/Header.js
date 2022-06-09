import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div>
                <Link to="/">
                    <h2>FoodMarket</h2>
                </Link>
                <p>Let’s get some foods</p>
            </div>
            <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=996&t=st=1654756356~exp=1654756956~hmac=8c850aee89050e80d865c7f9abbca76c0235a90141889a19073903a6ba4a098a" alt="" />
        </header>
    )
}

export default Header