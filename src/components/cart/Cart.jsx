import React,{} from "react";
import { CartContext } from "../cartContext/CartContext";



const Cart = ( ) => {
    
    const {cartItems} = CartContext(CartContext);


    return ( 
        <>
        <h1>Agregado al carrito</h1>
        
        </>
     );
}
 
export default Cart;