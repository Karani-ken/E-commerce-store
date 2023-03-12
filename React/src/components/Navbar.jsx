import React from "react";
import '../components/style/style.css'
import {Link} from 'react-router-dom'
function Navbar() {

    return (
        <div className="navbar">
            <h1 className="font-black text-3xl p-3 m-3">
                <Link to='/'>shopify</Link></h1>
           
            <h2><Link to='/cart'>Cart</Link></h2>


        </div>
        )
}
export default Navbar;