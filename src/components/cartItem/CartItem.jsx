
import React from "react";


const CartItem = ({ item, quantity, removeItem }) => {
  return (
    <div className="flex">
       <img src={item.carImg} style={{width:"8rem"}} alt={item.carModel}
            />{item.carMake} - {item.carModel} - <span>Precio unidad: USD </span> {item.price.toFixed(3)} - <span>Cantidad: </span>{quantity}
      <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
        X
      </button>
      
    </div>
  );
};

export default CartItem;