import { useState } from "react";
import Button from "react-bootstrap/Button";


const ItemCount = () => {
const [count, setCount] = useState(0);
let stock = {
  laptop: 4,
  monitor: 5,
  i7: 6,
  teclado:4  
};
const onAdd = () => {
  console.log(count)
  }
  return (
    <>
    <div className="agregarItem">
        <h6>Agregar al Carrito</h6>    
        <Button className="btnMenos"  variant="danger" onClick={()=> setCount(Math.max(count - 1, 0)) }> - </Button>
        {count}
        <Button className="btnMas" variant="success" onClick={() => setCount(Math.min (count + 1, stock.laptop))} > + </Button>
        <div > <Button onClick={()=> {onAdd()}} className="btnGoCart" variant="warning"> Ir al Carrito</Button></div>
    </div>
    </>
  );
};
export default ItemCount;
