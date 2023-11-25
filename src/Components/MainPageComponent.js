import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import ResComponent, {LabelResComponent} from "./ResComponent";


export const MainPageComponent = ()=>{
    
    const [restaurants, setRestaurants] = useState([]);
    const [searchBox, setSearchBox] = useState('')
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const EnhancedLabelResComponent = LabelResComponent(ResComponent);
    function showTopRated(){
            setFilteredRestaurants(restaurants.filter(restaurant => restaurant.info.avgRating >4))
    }
    const useRestaurants = ()=>useEffect(()=>{
         async function getRes(){
            const completeSwiggyDetails = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.578719393461192&lng=73.68416821775911&page_type=DESKTOP_WEB_LISTING')
            const restaurantJson = await completeSwiggyDetails.json()
            const restaurantsDetails = restaurantJson?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setRestaurants(restaurantsDetails);
            setFilteredRestaurants(restaurantsDetails)
            console.log(restaurantsDetails);
            }
        getRes();
    },[])
    useRestaurants();
    
    
    if(restaurants.length === 0){
        return <Shimmer/>
    }
    

    return(
        <>
        {/* Search Box */}
        <button className="ml-8 bg-green-300 py-4 px-2 m-4 rounded-lg" onClick={()=>{
             setFilteredRestaurants(restaurants.filter(restaurant =>    
                (restaurant.info.name).toLowerCase().includes(searchBox)
           ))
        }}>
            Search
        </button>
         <input className= "border border-black" value={searchBox} onChange={e=>setSearchBox(e.target.value)}></input>

          {/*Top Rated Restaurants  */}
        <button className="ml-8 bg-green-300  rounded-lg py-4 px-2 m-4" onClick={()=>showTopRated()}>Top Rated</button>

        <div className="flex flex-wrap">
        {filteredRestaurants.map(restaurant =>
        {
            if(restaurant.info.avgRating > 4){
                return <Link key ={restaurant.info.id} to={restaurant.info.id}><EnhancedLabelResComponent res = {restaurant.info}></EnhancedLabelResComponent></Link>
            }
            return <Link key ={restaurant.info.id} to={restaurant.info.id}><ResComponent res = {restaurant.info}></ResComponent></Link>
        }
        )}
        </div>
        </>
    )
}