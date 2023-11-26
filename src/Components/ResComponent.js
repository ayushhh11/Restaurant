import { useContext } from "react";
import UserContext from "./utils/UserContext";

const ResComponent = (prop) => { 
    const {loggedInUser}= useContext(UserContext)
    const {res} = prop;
    

     const {name, cuisines, sla, avgRating, cloudinaryImageId} = res
    return (
    <div className=' rounded-lg w-[230] p-2 m-2 bg-gray-100 hover:bg-gray-200 dark:bg-slate-100' >
        <img className='w-60 h-52 rounded-lg' src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ cloudinaryImageId}/>
        <h3 className='font-bold text-lg py-4'>{name}</h3>
        {/* <h5 className="font-serif">{cuisines.join(', ')}</h5> */}
        <i>{sla.deliveryTime} mins</i>
        <h5 className="font-semibold">{avgRating} Star</h5>
        <h2>loggedUser: {loggedInUser}</h2>
    </div>
);
}

export const LabelResComponent = (ResComponent)=>{
    return (prop)=>{
        
        return (
            <div>
                <label className="absolute bg-black text-white">High🌟</label>
                <ResComponent  {...prop}/>
            </div>
        )
    }
}
export default ResComponent;