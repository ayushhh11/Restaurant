import { useEffect, useState} from "react";
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer";
import useRestaurants from "./useRestaurants";
import { RestaurantsDetails } from "./RestaurantsDetails";


const Restaurants = ()=> {
    
    const {id} = useParams();
    const [showDetails, setshowDetails] = useState(false)
    const res = useRestaurants(id);
    
    if(res.length==0){
        return (<Shimmer />)
    }

    return (
        <div>
        <h3 className="text-xl mx-auto font-bold w-6/12">{res.cards[0].card.card.info.name}</h3>
        <RestaurantsDetails details={res}/>
        </div>
    )
    

}
export default Restaurants;