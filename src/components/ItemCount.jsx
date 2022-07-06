import { useState } from "react";
import Button from "react-bootstrap/Button";


const ItemCount = () => {
const [count, setCount] = useState(0);
  return (
    <>
        <h6>Agregar items al Carrito</h6>
        <img className="imgItem" src="https://www.notebookcheck.org/uploads/tx_nbc2/air13teaser.jpg" alt="notebook" />
    
        <Button className="btnMenos"  variant="danger" onClick={()=> setCount(Math.max(count - 1, 0)) }> - </Button>
        {count}
        <Button className="btnMas" variant="success" onClick={() => setCount(count +1)} > + </Button>
        <div > <Button className="btnGoCart" variant="warning"> Ir al Carrito</Button></div>
    </>
  );
};

export default ItemCount;
