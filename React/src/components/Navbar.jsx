import React from "react";
import '../components/style/style.css'
function Navbar() {

    return (
        <div className="navbar">
            <h1 className="logo">shopify</h1>
            <ul className="menus">
                <li>home</li>
                <li>products</li>
                <li>about us</li>
                <li>contacts</li>
                <li>feedback</li>
            </ul>

            <h2>Cart</h2>


        </div>


    )
}
export default Navbar;