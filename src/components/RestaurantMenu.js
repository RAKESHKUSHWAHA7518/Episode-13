
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { Menu_API } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
 


const RestaurantMenu =()=>{

    

     const {resId}= useParams()
    //   console.log(params)

     const resInfo =useRestaurantMenu(resId)

     const [showIndex ,setshowIndex] =useState(null) 

    
    if(resInfo === null) return <Shimmer/>;
    

      const {name,cuisines,costForTwoMessage,imageId
        , 
      }= resInfo?.cards[0]?.card?.card?.info;

        const  {itemCards}= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

   
      // console.log(itemCards)

      //  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card)

      const categories= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


      // console.log(categories)
    return ( 
        <div className="text-center ">
         
            <h1 className="font-bold my-6 text-2xl" > {name}</h1>
            <h3 className="font-bold   text-lg"  > {cuisines.join(", ")}-{costForTwoMessage}</h3>
            <h3> </h3>
            { categories.map((category,index)=>(
               <RestaurantCategory  key ={category?.card?.card.title }
                data={category?.card?.card}
                showItem ={index=== showIndex?true: false}
                setshowIndex ={()=> setshowIndex(index)}
                />))}



            {/* <h2>Menu</h2>
            <ul className=" ">
                {itemCards.map((item) => (<li   key={item.card.info.id}> {item.card.info.name}<br></br>  {"      "}{item.card.info.price/100 ||item.card.info.defaultPrice/100  }Rs <b>{<img  className="bg-green-100" src={ Menu_API +item.card.info.imageId }/> } </b></li>) )}
                 
            </ul> */}
        </div>
    )
}

export default RestaurantMenu;

//      const categories= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"]===);