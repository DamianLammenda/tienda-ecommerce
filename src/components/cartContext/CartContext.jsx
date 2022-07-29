import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const isInCart = (itemId) => {
    let index = -1;
    let cantidad = 0;
    let isIn = false;
    cartItems.forEach((element, indice) =>{
        if(element.item.id === itemId){
            index = indice;
            cantidad = element.count;
            isIn = true;
        }
    });

    return [isIn, cantidad, index];
  };

  const addItem = (item, quantity) => {
    const [isIn, cantidad, index] = isInCart(item.id);
    let count = quantity;
    if(isIn){
        count = count + cantidad;
        setCartItems(cartItems.splice(index , 1));
    }
    setCartItems([...cartItems, {item,count}]);
    
  }

  const removeItem = (itemId) => {

  }

  const clear = () => {

  }






  return (
    <CartContext.Provider value={{ cartItems, addItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
