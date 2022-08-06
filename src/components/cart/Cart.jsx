

import React, { useContext } from "react";
import { GContext } from "../cartContext/CartContext";
import CartItem from "../cartItem/CartItem";
import { Link } from "react-router-dom";
import "../cart/cart.css"
import {getFirestore, collection, addDoc} from "firebase/firestore";

const Cart = () => {
  const { itemsCarrito, removeItem, clear, total } = useContext(GContext);
  const tot = total();

  const buy = ()  =>{
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const order = {
      buyer: {
        name: "Damian",
        email: "damian@example.com",
        phone: "123456789",
        address:"Avenida Siempreviva 742",
        item: itemsCarrito,
        total: total()
      },     
    };    
    addDoc(orderCollection, order).then((res) => console.log(res.id));
  }

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
          <button className="btn btn-success" onClick={buy}>Finalizar Compra</button>
          <Link to={"/"} > <button className="btn btn-secondary">Volver</button> </Link> 
        </>
        
      )}
    </>
  );
};

export default Cart;