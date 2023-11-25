import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

export const RestaurantsDetails=({details})=>{
    
    const foodDetails = details.cards[2].groupedCard.cardGroupMap.REGULAR.cards
    
    const items = foodDetails.filter(foodDetails=>foodDetails.card.card.itemCards)
    console.log('items',items);

    const dispatch = useDispatch();

    const handleClick = (name)=>{
       return ()=>{ dispatch(addItem(name));}
    }

    return (
        <div>
            {items[0].card.card.itemCards.map(items=> { return (
                <div className="flex flex-wrap">
                    <div className="w-8/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                    {items.card.info.name}
                    -{(items.card.info.price ?? items.card.info.defaultPrice)/100}
                        <div className="text-sm bg-gray-100 text-gray-500 ">
                        {items.card.info.description}
                        
                            <button onClick={handleClick(items.card.info.name)} className="p-2 m-2 bg-orange-400 text-white rounded-lg">
                            Add
                            </button>    
                             </div>                    
                    </div>
                </div>
            )
            })}
            </div>
    )
}