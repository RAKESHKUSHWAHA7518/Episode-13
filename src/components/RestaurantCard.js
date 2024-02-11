
import { useContext } from "react";
import { CDN_URL } from "../utils/constants";

import UserContext from "../utils/UserContext";


// const styleCard ={
//     backgroundColor: "#f0f0f0",
// };

const RestaurantCard =  (props)=> {
    const { resData } = props;

    const {loggedInUser}=useContext(UserContext);
    
    const { 
        cloudinaryImageId,
        name,
        cuisines,
        costForTwo,
        avgRating,
       
        deliveryTime,} =resData?.info;

         

       
    return (
        <div className='res-card m-4 p-4 w-[300px] rounded-lg bg-gray-200 hover:bg-green-200  ' >
                <img
        className="res-logo rounded-lg "   
                  src={ CDN_URL
           +
          cloudinaryImageId
        }
        alt="Biryani"
      />
           <h3 className=" font-bold py-4 text-lg">{name}</h3>
             <h4>{ cuisines.join(", ")}</h4>
             <h4>{ avgRating} stars</h4>
             <h4>{ costForTwo}</h4>
             <h4>{ deliveryTime}minutes </h4>
             <h4>User:{ loggedInUser} </h4>
             
             


               </div>


    );
};


//  Higher order Component 
//  input = ResCard input => ResCard promoted 

  export const withPromtedLabel= (RestaurantCard)=> {
  return (props)=>{

    return (
      <div>
        <label>
          Promoted
        </label> 

        <RestaurantCard {...props}/>
      </div>
    );
  };
 };

export default RestaurantCard;

// style={{ backgroundColor: "#f0f0f0", }}