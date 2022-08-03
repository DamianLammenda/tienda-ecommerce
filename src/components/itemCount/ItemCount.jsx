
import React from 'react'
import { useState } from "react";
import Button from "react-bootstrap/Button";



const ItemCount = ({stock,initial, onAdd, item, amount}) => {
const [count, setCount] = useState(initial);


  return (
    <>
    <div className="agregarItem m-4">
        <h6>Agregar al Carrito</h6>    
        <Button className="btnMenos"  variant="danger" onClick={()=> setCount(Math.max(count - 1, initial)) }> - </Button>
        {count}
        <Button className="btnMas" variant="success" onClick={() => setCount(Math.min (count + 1, stock))} > + </Button>
        <div > <Button onClick={() => {onAdd(item, count)}}  className="btnGoCart" variant="warning" disabled={count === 0} > Agregar al Carrito</Button></div>
    </div>
    </>
  );
};
export default ItemCount;
