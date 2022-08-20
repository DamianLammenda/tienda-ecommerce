import React,{useContext, useState}  from 'react'
import Spinner from "react-bootstrap/Spinner";
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { GContext } from "../cartContext/CartContext";
import "../ItemDetail/itemDetails.css";
import Swal from 'sweetalert2';

const ItemDetail = (props) => {
  const [amount, setAmount] = useState(0);
  const { addItem } = useContext(GContext);
  const onAdd = (item, count, amount) => {
    {Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Agregado al carrito",
      showConfirmButton: false,
      timer: 3000,
    })}
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
                Precio: USD {Number(props.details.price).toFixed(3)}$
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

      {amount === 0 ? (
        <>
          <div className='d-flex justify-content-between align-items-center ps-2'>
            <Link to={"/"}>
              <button className="btnvolver">Volver</button>
            </Link>
          
          <ItemCount
            stock={props.details.carStock}
            initial={0}
            onAdd={onAdd}
            item={props.details}
            amount={amount}
          />
          </div>
        </>
      ) : (
        <div className='m-4 d-flex  justify-content-between'>
          <Link to={"/"}>
            <button className="btnvolver">Seguir Comprando</button>
          </Link>
          <Link to={"/cart"}>
            <button className="btnvolver" key={props.details.id}>
              Procesar Compra
            </button>
          </Link>
        </div>
      )}
    </>
  ) : (
    <>
      <Spinner animation="grow" variant="dark" />
    </>
  );
};


export default ItemDetail;
