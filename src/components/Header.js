
import { LOGO_URL } from "../utils/constants";

import { useState,useEffect, useContext } from "react";

import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header =() =>{

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} =useContext(userContext)

    //  subcribing to the

    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);



    // let btnName = "Login";

    

    const  [btnNameReact,setBtnNameReact] =useState("Login");

    useEffect(() =>{
        // console.log("useEffect")
    })


    return (
        <div className='flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-100 lg:bg-green-100 md:to-blue-100'>
            <div className='logo-container'>
                <img className='w-28' src= {LOGO_URL}/>
            </div>
            <div className='flex items-center'>
                <ul className="flex  m-0 p-2">

                    <li className="px-2">Status:{onlineStatus ? "\u2705":"\u274C"}</li>

                 

                <li>< Link to="/" > Home </Link> </li> 
                 
                   <li className="px-2">< Link to="/about" >About us </Link> </li> 
                   <li className="px-2"> <Link to="/contact">Contact Us</Link> </li> 
                   <li className="px-2"> <Link to="/grocery">Grocery</Link> </li> 
                   <li className="px-2 font-bold"> 
                   
                   <Link to="/cart">Cart</Link>({cartItems.length} Item) </li> 
                   

                   <button className="login " onClick={()=>{
                    btnNameReact==="login" ? setBtnNameReact("logout") :setBtnNameReact("login");
                    console.log((btnNameReact))
                   }}
                  

                   >{btnNameReact}</button>

                    <li className="px-2 font-bold"> {loggedInUser} </li> 
                    
                </ul>
            </div>

        </div>
    )
}


export default Header ;