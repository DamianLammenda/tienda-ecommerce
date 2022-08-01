import React,{useContext, useState}  from 'react'
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { GContext } from "../cartContext/CartContext";

const ItemDetail = (props) => {
  const [amount, setAmount] = useState(0);
  const { addItem } = useContext(GContext);
  const onAdd = (item, count, amount) => {
    addItem(item, count);
    setAmount(amount);
  };

  return props.loading ? (
    <>
      <div className="card">
        <div className="row g-0">
          <div className="col-5 col-sm-4">
            <img
              src={props.details.carImg}
              className="img-fluid w-100"
              alt={props.details.carModel}
            />
          </div>
          <div className="col-7 col-sm-8">
            <div className="card-body">
              <h5 className="card-title">{props.details.carMake}</h5>
              <p className="card-text">{props.details.carModel}</p>
              <p className="card-text">Año: {props.details.carYear}</p>
              <p className="card-text">
                Descripción: {props.details.description}
              </p>
              <p className="card-text">Color: {props.details.color}</p>
              <p className="card-text">
                Precio: USD {props.details.price.toFixed(3)}$
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Stock disponible: {props.details.carStock}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {(amount === 0 ? (
        
        <ItemCount
          stock={props.details.carStock}
          initial={0}
          onAdd={onAdd}
          item={props.details}
          amount={amount}
          
        />
      ) : ( 
      
       <div>
         <p>Producto agregado</p>
         <Link to={"/cart"}>
            <button className="btn btn-success btn-checkout">
              
             Procesar Compra
           </button>
         </Link>
         <Link to={"/"}>
            <button className="btn btn-secondary btn-checkout">
              
             Seguir Comprando
           </button>
         </Link>
       </div>
      ))}
      
    </>
  ) : (
    <>
      <Spinner animation="grow" variant="dark" />
    </>
  );
};


export default ItemDetail;
