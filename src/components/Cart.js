import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";

import { clearCart } from "../utils/cardSlice";

 const Cart = ()=> {
const cartItems= useSelector((store)=>store.cart.items);

const dispatch =useDispatch()

const handleClearCart =()=>{
    dispatch(clearCart());

}

    return (<div className="text-center m-4 p-4 ">
        
        <h1 className="text-xl font-bold"    >Cart</h1>
        <div className="w-6/12 m-auto">
            <button 
            className="p-2 m-2 bg-black rounded-lg text-white"
             onClick={handleClearCart}>
                 Clear Cart
                 </button>
                 {cartItems.length===0&&<h1>cart is empty</h1> }
            <ItemList items ={cartItems}/>

            
             </div>
        </div>
) }

 export default Cart;