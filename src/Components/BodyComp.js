import ResComponent, {LabelResComponent} from "./ResComponent";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";


// console.log('this is enhanced', EnLabelResComponent);
const BodyComp = ()=>{
    const EnLabelResComponent = LabelResComponent(ResComponent);
    const [valueText,setvalueText] = useState("")
    const [newresArray,setnewResArray] = useState([])
    const [filteredList, setfilteredList] = useState([])
    useEffect( ()=>{
        async function getData(){
            
            const ab = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.578719393461192&lng=73.68416821775911&page_type=DESKTOP_WEB_LISTING')
            const ab_json = await ab.json();
            console.log('old abjson',ab_json);
            const abjson = await ab_json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log('new abjson',abjson);
            setnewResArray(abjson)
            setfilteredList(abjson)
        }
        getData();
    },[])
const online = useOnlineStatus();
if(online === false){
    return (<h2>Pay your Internet bills buddy 💸!! </h2>)
}
if (newresArray.length === 0){
    return (<Shimmer/>)
}
    return (
    
    <div className='body dark:bg-white'>
        
       <div className='m-4 ' >
        
        
        <input type="text" className="border border-solid border-black " value={valueText} onChange={(e)=>{setvalueText(e.target.value)}}/> <button className = 'py-4 px-2 bg-green-300 m-4 rounded-lg' onClick={ async ()=>{
            const ab = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.578719393461192&lng=73.68416821775911&page_type=DESKTOP_WEB_LISTING')
            const ab_json = await ab.json()
            const abjson = await ab_json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
        
        setnewResArray(abjson)
            const filteredList = newresArray.filter((res)=>res.info.name.toLowerCase().includes(valueText))
            setfilteredList(filteredList)
            
        }}>Search</button>
        
        
        <button className="ml-8 bg-green-300 py-4 px-2 m-4 rounded-lg" onClick={()=>{
            <h1>sdsad</h1>
            setnewResArray(newresArray.filter(restaurant=>{
                if(!isNaN(restaurant.info.avgRating)){
                return restaurant.info.avgRating > 4  
                }
            }
            ))
            }
            }>
            Top rated Restaurants
        </button>
         
        
       </div>
       <div className=' flex flex-wrap '>
       { 
       filteredList.map(restaurant => 
// yaha single line m likha h isliye no need to write return

    //    <Link to={restaurant.info.id} key ={restaurant.info.id} ><ResComponent res ={restaurant.info}  /></Link>
    {
        if(restaurant.info.avgRating > 4)
            return <Link to={restaurant.info.id} id={restaurant.info.id}><EnLabelResComponent res ={restaurant.info}  /></Link>
        else
            return <Link to={restaurant.info.id} id={restaurant.info.id}><ResComponent res ={restaurant.info}  /></Link>
    }
    
    )
       }
       </div>
    </div>
)
    }
export default BodyComp;