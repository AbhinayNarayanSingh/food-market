import React from 'react'
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import IndividualProduct from './pages/IndividualProduct';
import Cart from './pages/Cart';
import Order from './pages/Order';


const App = () => {
    return (
        <div className='mobile-view-container'>
            <div className="container">
                {/* <div className="notification">
                    <p>Apply Coupon Code SAMIR15 to get 15% discount off. T&C</p>
                </div> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:slug" element={<IndividualProduct />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/order" element={<Order />} />
                </Routes>

            </div>
        </div>
    )
}

export default App