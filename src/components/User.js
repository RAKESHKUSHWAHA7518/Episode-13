
import { useEffect, useState } from "react";

const User=({name}) =>{
    const [count,setCount] =useState(0);
    const [count2] =useState(1);

    // function handleClick() {
    //     setCount(count + 1);
    //   }
     useEffect(()=>{



     },[])

     async function getUserInfo(){

     }

    


    return ( <div className="user-card">
        
        <h2> Name :Rakesh kushwaha </h2>
        <h2>  {name}</h2>
        <h3> location : Akabar shahpur Meja Prayagraj</h3>
        <h4>Contact : rk7518329420@gmail.com</h4>
         </div>
         )
}

export default User;
