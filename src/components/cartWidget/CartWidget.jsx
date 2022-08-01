import React,{useContext} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { GContext } from '../cartContext/CartContext';

const CardWidget = () => {
  const {itemsCarrito} = useContext(GContext);
  return (
    <>
      <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: "1.5rem" }} />
      <span>{itemsCarrito.length}</span>
    </>
  );
};

export default CardWidget;
