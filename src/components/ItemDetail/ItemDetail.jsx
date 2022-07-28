import React,{useContext}  from 'react'
import { useState, prevState } from 'react';
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from '../cartContext/CartContext';


const ItemDetail = (props) => {
  const {cartItems, setCartItems, addItem} = useContext(CartContext);
  const [amount, setAmount] = useState(0);
  

  // const onAddItem = (count) => {
  //   setAmount(count);
  //   setCartItems((prevState)=> [...prevState,props.details])
  //   console.log(prevState)
    
  // };
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
              <h5 className="card-title">Marca: {props.details.carMake}</h5>
              <p className="card-text">Modelo: {props.details.carModel}</p>
              <p className="card-text">Año: {props.details.carYear}</p>
              <p className="card-text">Descripción: {props.details.description}</p>
              <p className="card-text">Color: {props.details.color}</p>
              <p className="card-text">Precio: USD {props.details.price}$</p>
              <p className="card-text">
                <small className="text-muted">
                  Stock disponible: {props.details.carStock}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {amount == 0 ? (
        <ItemCount
          stock={props.details.carStock}
          initial={0}
          onAdd={addItem}
          item={props.details}
        />
      ) : (
        <Link to={"/Cart/"}>
          <Button className="btn btn-success">Ir al Carrito </Button>
        </Link>
      )}
    </>
  ) : (
    <>
      <Spinner animation="grow" variant="dark" />
    </>
  );
};


export default ItemDetail;
