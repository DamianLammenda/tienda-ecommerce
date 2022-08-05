

import React, { useContext } from "react";
import { GContext } from "../cartContext/CartContext";
import CartItem from "../cartItem/CartItem";
import { Link } from "react-router-dom";
import "../cart/cart.css"
const Cart = () => {
  const { itemsCarrito, removeItem, clear, total } = useContext(GContext);
  const tot = total();
  return (
    <>
      {itemsCarrito.length === 0 ? (
        <>
          <h4>No hay Productos! Agrega algunos</h4>
          <Link to={"/"}>
            <button className="btn btn-secondary">Volver</button>
          </Link>
        </>
      ) : (
        <>
          {itemsCarrito.map((element) => (
            <CartItem
              item={element.item}
              quantity={element.quantity}
              removeItem={removeItem}
              key={element.id}
            />
          ))}
          
          <button className="btnVaciar"  onClick={() => clear()}>
            Vaciar carrito
          </button>
          <h4 className="tituloTotal">El total de la compra es de : USD {tot.toFixed()}</h4>
          <button className="btn btn-success">Finalizar Compra</button>
          <Link to={"/"} > <button className="btn btn-secondary">Volver</button> </Link> 
        </>
      )}
    </>
  );
};

export default Cart;