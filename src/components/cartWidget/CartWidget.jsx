import React,{useContext} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { GContext } from '../cartContext/CartContext';
import "../cartWidget/cartWidget.css"

const CartWidget = () => {
  const {itemsCarrito} = useContext(GContext);
  return (
    <> 
    {itemsCarrito.length === 0 ?(
      <></>
    ):(
      <>
      <FontAwesomeIcon className='cartIcon' icon={faCartShopping} />
      <span className='counter'>{itemsCarrito.length}</span>
      </>
    )}     
    </>
  );
};

export default CartWidget;
