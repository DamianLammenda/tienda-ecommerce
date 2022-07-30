// import React, { createContext, useState } from "react";

// export const CartContext = createContext();

// const CartProvider = ( props) => {
//   const [cartItems, setCartItems] = useState([]);

//   const isInCart = (item) => {
//     return cartItems.find((element) => element.item === item);
//   };
  

//   const addItem = (item, quantity) => {
//     const newItem = isInCart(item);
//     if (newItem) {
//       quantity = quantity + newItem.quantity;
//       setCartItems(
//         cartItems.splice(
//           cartItems.findIndex((element) => element.item.id === item.id),
//           1
//         )
//       );
//     }
//     setCartItems([...cartItems, {item}]);
//     console.log (item)
//   }

//   const removeItem = (itemId) => {
//     setCartItems(cartItems.filter((element) => element.item.id !== itemId));
//   }

//   const clear = () => {
//     setCartItems([]);
//   }


//   const total = () => {
//     return cartItems.reduce((initialValor, secondValor) => initialValor + secondValor.item.price * initialValor.quantity, 0);
//   };



//   return (
//     <CartContext.Provider value={{ cartItems, addItem, removeItem, clear, total }}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;

import React, { createContext, useState } from "react";
export const GContext = createContext();

const CartContext = ({ children }) => {
  const [itemsCarrito, setItemCarrito] = useState([]);

  const addItem = (item, quantity) => {
    const newItem = isInCart(item);
    if (newItem) {
      quantity = quantity + newItem.quantity;
      setItemCarrito(
        itemsCarrito.splice(
          itemsCarrito.findIndex((element) => element.item.id === item.id),
          1
        )
      );
    }
    setItemCarrito([...itemsCarrito, { item, quantity }]);
  };

  const isInCart = (item) => {
    return itemsCarrito.find((element) => element.item === item);
  };
  

  const clear = () => {
    setItemCarrito([]);
    
  };
  const removeItem = (itemId) => {
    setItemCarrito(itemsCarrito.filter((element) => element.item.id !== itemId));
  };

  const total = () => {
    return itemsCarrito.reduce(
      (valorAnterior, valorActual) => valorAnterior + valorActual.item.price * valorActual.quantity,
      0
    );
  };
  return <GContext.Provider value={{ itemsCarrito, addItem, removeItem, clear, total }}>{children}</GContext.Provider>;
};

export default CartContext;