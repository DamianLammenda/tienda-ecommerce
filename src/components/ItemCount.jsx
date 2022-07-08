import { useState } from "react";
import Button from "react-bootstrap/Button";


const ItemCount = (props, onAdd) => {
const [count, setCount] = useState(props.initial);


  return (
    <>
    <div className="agregarItem">
        <h6>Agregar al Carrito</h6>    
        <Button className="btnMenos"  variant="danger" onClick={()=> setCount(Math.max(count - 1, props.initial)) }> - </Button>
        {count}
        <Button className="btnMas" variant="success" onClick={() => setCount(Math.min (count + 1, props.stock))} > + </Button>
        <div > <Button onClick={() => {onAdd={onAdd}} } className="btnGoCart" variant="warning" disabled={count === 0} > Ir al Carrito</Button></div>
    </div>
    </>
  );
};
export default ItemCount;
