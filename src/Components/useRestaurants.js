import { useEffect, useState } from "react"
import ONE_RES from "./utils/constants";
import Shimmer from "./Shimmer";

const useRestaurants = (id)=>{
    const[res, setRes] = useState([]);

    useEffect(()=>{
        async function getData(){
            const singleRes = await fetch(ONE_RES+id);
            const singleResJson = await singleRes.json();
            console.log(singleResJson);
            setRes(singleResJson);
        }
        getData();
    },[])
    if (res.length===0){
        return res 
    }
    // const {name, cuisines } = res.data.cards[0].card.card.info
    // const resCards = res.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards
    return res.data 
    
    // );
}
export default useRestaurants;