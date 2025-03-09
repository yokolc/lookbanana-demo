import React from "react";
import {link} from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <ul>
                <li><Link to="/">HomePage</Link></li>
                <li><Link to="/product">ProductPage</Link></li>
                <li><Link to="/cart">CartPage</Link></li>
                <li><Link to="/checkout">CheckoutPage</Link></li>
            </ul>
        </nav>
    )
}