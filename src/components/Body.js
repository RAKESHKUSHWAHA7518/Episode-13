
import RestaurantCard ,{withPromtedLabel}from "./RestaurantCard";
 
 

 import { useEffect, useState,useContext } from "react";

 import Shimmer from "./Shimmer";
 import { Link } from "react-router-dom";

 import useOnlineStatus from "../utils/useOnlineStatus";

 import { useContext } from "react";

 import UserContext from "../utils/UserContext";

//  import UserContext from "../utils/UserContext";

//  import UserContext from "../utils/UserContext";
//  State Variables - super powerful variables



 

 

const Body =() =>{

     const [listOfRestaurants, setListOfRestaurant]= useState([]);

     const [filteredRestaurant, setFilteredRestaurant]=useState([])

      const [searchText ,setSearchText] = useState("")

      const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

    //    whenever state variable , react triggers a reconciliation cycle (re -render the component)

    console.log("rakesh")

     useEffect (()=>{
        
        fetchData();

     }, []);

   
      const fetchData = async() =>{

        const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

 
       
       
            const json = await data.json();

            // console.log(data.cards[2]);
      
             console.log(json);
             
            // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

            //  Optional Chaining                                                                
            setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
      };


     
       const onlineStatus = useOnlineStatus();
       if(onlineStatus===false){
        return(
            <h1>
                Look like you are offline
            </h1>
        )
       }

      

//  if(listOfRestaurants.length===0){

//    return <Shimmer/>;

   const { loggedInUser,setUserName}= useContext(UserContext);
    
     
     return listOfRestaurants.length===0 ?  <Shimmer/> : (
        <div className='body'>
            <div className='filter flex'>
                <div className="search p-4 m-4">
                    <input type="text"
                     className ="border border-solid border-black"
                      value ={searchText}
                       onChange={(e) =>{
                        setSearchText(e.target.value);
                    }} />
                    <button className="px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={()=>{
                        //  filter
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchText)
                        );

                        setFilteredRestaurant(filteredRestaurant)

                      

                        

                    }}>Search</button>
                </div>
                 <div className="p-4 m-4 flex items-center"> 
                <button  className="filter-btn px-4 py-2 bg-gray-200 rounded-lg" 
                onClick={() => {

                     
                //     filter logic here
                 const filteredList = listOfRestaurants.filter(
                    (res)=>res.info.avgRating>4
                    );
                     setListOfRestaurant(filteredList)

                    // console.log(listOfRestaurants);

                } }
                 
                >
                    Top Rated Restaurants</button>
                    </div>

                    <div className="p-4 m-4 flex items-center">
                        <label>User Name:</label>
                   <input className="border border-black p-2" 
                   value = {loggedInUser}
                   onChange={(e)=> setUserName(e.target.value)}/>
                    </div>
            </div>




            <div className='res-conatiner flex flex-wrap rounded-lg'>
            
            {
                filteredRestaurant.map((restaurants,index)=>(
               <Link key={restaurants.info.id}  to ={"/restaurants/"+restaurants.info.id}>
                
                {/* restaurants.data.promoted ? (<RestaurantCardPromoted  resData={restaurants}/>): */}
                
                 <RestaurantCard  resData={restaurants}/></Link>)
           ) }
           
 
                 
                
            </div>

        </div>
    )

}



 
export default Body;