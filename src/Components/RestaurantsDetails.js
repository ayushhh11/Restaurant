export const RestaurantsDetails=({details})=>{
    
    const foodDetails = details.cards[2].groupedCard.cardGroupMap.REGULAR.cards
    
    const items = foodDetails.filter(foodDetails=>foodDetails.card.card.itemCards)
    

    return (
        <div>
            {items[0].card.card.itemCards.map(items=> { return (
                <div key={items.card.info.name}>
                {items.card.info.name}
                {items.card.info.price}
                {items.card.info.description}
                </div>
            )
            })}
            </div>
    )
}