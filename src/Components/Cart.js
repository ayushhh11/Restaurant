import { useSelector } from "react-redux";

const Cart = ()=>{
    cartItems = useSelector((store)=> store.cart.items)
    return (
        <div>
            
            {
            cartItems.map(cartItem => <p>
                {
                    cartItem
                }
                </p>)
            }
            
        </div>
    )
}
export default Cart;