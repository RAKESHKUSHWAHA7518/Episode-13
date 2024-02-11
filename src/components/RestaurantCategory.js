import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory=({data,showItem,setshowIndex})=>{

    //  console.log(data);

        

    //  const [showItem ,setShowItemss] = useState(false);

     
   const handleClick =()=>{

    //  setShowItemss(!showItem);

    setshowIndex();

  }
      

    return  <div>
    
       

    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="text-lg font-bold">{data.title}({data.itemCards.length})</span>
        <span className="text-xl">&#10549; </span>

        </div>
      { showItem && <  ItemList items={data.itemCards}/>}
    </div>

   
    </div>
    
}

export default RestaurantCategory;