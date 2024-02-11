
// import { useDispatch } from "react-redux";
import { CDN_URL, Menu_API } from "../utils/constants";
import { addItem } from "../utils/cardSlice";

import { useDispatch } from "react-redux";
const ItemList= ({items})=>{

  const dispatch =useDispatch()

const handleAddItem =(item)=>{
  // diapatch and action 
  dispatch(addItem(item));
  // console.log(item);
  
};

    // console.log(items)
    return( <div> 


        
       {items.map((item) => (
      <div className="p-2 m-2  border-black border-b-2 text-left flex justify-between " key={item.card.info.id}> 
      
      
      <div className="w-9/12">
        <div  className="py-2">
        <span>{item.card.info.name}</span>  
         
         <span>{"      "} -₹{"      "} {item.card.info.price/100 ||item.card.info.defaultPrice/100  }Rs</span> 
          
        </div>
      <p className=" text-xs">{item.card.info.description}</p><br></br>
      </div>
      
      <div className="w-3/12 p-4">

      
      <div className="absolute">
      
      <button className="p-2 mx-10 rounded-lg bg-white shadow-lg  m-auto" onClick={()=>handleAddItem(item)}>Add +</button>
      </div>

      <img  className="bg-green-100 rounded-md "src={ Menu_API +item.card.info.imageId } /> 
      </div>

      </div>
      
      ) )} 
     
    
    </div> );
      
 
};

export default ItemList;


//  src={ Menu_API +item.card.info.imageId }