// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Shimmer from "./Shimmer";
// const Restaurants =  ()=> {
//     const {id} = useParams()
    
    
//     const[res, setRes] = useState(null)
//     useEffect(()=>{fetchMenu()},[])
//     const fetchMenu = async()=>{
//     const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5912716&lng=73.73890899999999&restaurantId='+id+'&catalog_qa=undefined&submitAction=ENTER');
//     const resData = await data.json()
//     setRes(resData.data.cards[0].card.card.info);
// }

// console.log('this is res', res );
//     if (res===null){
//         return <Shimmer/>
//     }

//     // , cuisines, areaName,costForTwo, avgRating
//     return (
        
//     <div className='resCard'>
//     <img className='resImage' src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'+ res.cloudinaryImageId}/>
//     <h3>Name: {res.name}</h3>
//     <h3>Cuisines: {res.cuisines.join(' ,')}</h3>
//     <h3>Ratings: {res.avgRating}</h3>
//     <h3>Area: {res.areaName}</h3>
//     <h3>Cost For Two: {res.costForTwo/100}</h3>
//     </div>
//     )
// }
// export default Restaurants;


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
    // const resCards = res.props.children[2]
    // const resFiltered = resCards.filter((res)=> (res.card.card.itemCards !== undefined))
    // console.log('after something', resCards);
    
    // console.log(resFiltered.card.card.itemCards.map(itemCard=>itemCard.card.info.description))
    // return (
    //     <div>

    //   {resFiltered.map(res => (
    //     <div key={res.card.card.itemCards[0].card.info.id} className="flex-wrap m-4 shadow-lg bg-green-100 align-middle">
    //       {res.card.card.title}
    //       <button onClick={() => setshowDetails(true)}> {/* Corrected function name */}
    //         ⬇️
    //       </button>
    //       {showDetails && <div>1</div>}
    //     </div>
    //   ))}
       
    // </div>
    // )
    return (
        <div>
        <h3>{res.cards[0].card.card.info.name}</h3>
        <RestaurantsDetails details={res}/>
        </div>
    )
    

}
export default Restaurants;