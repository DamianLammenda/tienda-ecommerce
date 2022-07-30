// import React, { useContext } from "react";
// import {CardContext} from "../cartContext/CartContext"


// const Cart = ( ) => {
    


//     return ( 
//         <>
//         <h1>Agregado al carrito</h1>
        
//         </>
//      );
// }
 
// export default Cart;

import React, { useContext } from "react";
import { GContext } from "../cartContext/CartContext";
import CartItem from "../cartItem/CartItem";
const Cart = () => {
  const { itemsCarrito, removeItem, clear, total } = useContext(GContext);
  const tot = total();
  return (
    <>
      {itemsCarrito.length === 0 ? (
        <>
          <h4>No hay items! Agrega algunos</h4>
          <h4>Volver</h4>
        </>
      ) : (
        <>
          {itemsCarrito.map((element) => (
            <CartItem item={element.item} quantity={element.quantity} removeItem={removeItem} />
          ))}
          <button  onClick={() => clear()}>
            Vaciar carrito
          </button>
          <h1>El total de la compra es de : {tot}</h1>
        </>
      )}
    </>
  );
};

export default Cart;