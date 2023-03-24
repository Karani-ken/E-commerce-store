import React from "react";
import '../components/style/style.css'
import {Link} from 'react-router-dom'
import{BsCart4}from 'react-icons/bs'
function Navbar() {

    return (
        <div className="navbar">
            <h1 className="font-black text-3xl p-3 m-3">
                <Link to='/'>shopify</Link></h1>
           
            <Link to='/cart'className="flex justify-center items-center"> <BsCart4 className="font-black text-3xl m-1"/>  
            <h2 className="text-2xl font-serif">
                Cart</h2></Link>


        </div>
        )
}
export default Navbar;