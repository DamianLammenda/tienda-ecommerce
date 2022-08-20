

import React, { useContext } from "react";
import { GContext } from "../cartContext/CartContext";
import CartItem from "../cartItem/CartItem";
import { Link } from "react-router-dom";
import "../cart/cart.css"
import {getFirestore, collection, addDoc} from "firebase/firestore";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faCircleCheck, faUser } from "@fortawesome/free-solid-svg-icons";



const Cart = () => {
  const { itemsCarrito, removeItem, clear, total } = useContext(GContext);
  const tot = total();

  const buy = ()  =>{
      Swal.fire({
        icon: "info",
        title: "Complete el formulario, para proceder con la compra",
        html: `
        <input type="text" id="swal-input1" class="swal2-input" required placeholder="Nombre">
        <input type="text" id="swal-input2" class="swal2-input" required placeholder="Apellido">
        <input type="email" id="swal-input3" class="swal2-input" required placeholder="Correo">
        <input type="number" id="swal-input4" class="swal2-input" required placeholder="Teléfono">
        <input type="password" id="swal-input5" class="swal2-input" required placeholder="Contraseña">
        `,
        focusConfirm: true,
        confirmButtonText: "Confirmar",
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
            document.getElementById("swal-input3").value,
            document.getElementById("swal-input4").value,
            document.getElementById("swal-input5").value,
          ];
        },
      }).then((result) => {
        if (result.value) {
          const [nombre, apellido, correo, password, telefono] = result.value;
          if (
            nombre === "" ||
            apellido === "" ||
            correo === "" ||
            password === "" ||
            telefono === ""
          ) {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Por favor complete todos los campos",
              confirmButtonText: "Aceptar",
            });
          } else {
            const db = getFirestore();
            const orderCollection = collection(db, "orders");
            const usuario = {
              nombre: nombre,
              apellido: apellido,
              correo: correo,
              contrasena: password,
              telefono: telefono,
              total: tot,
              items: itemsCarrito,
              fecha: new Date(),
            };
            addDoc(orderCollection, usuario).then((res) => {
              console.log(res.id);
            });
            Swal.fire({
              icon: "success",
              type: "success",
              title: "Registro exitoso",
              text: "Recibira un correo con los detalles de su orden",
              confirmButtonText: "Aceptar",
              preConfirm: () => {
                clear();
                window.location.href = "/";
              },
            });
          }
        }
      });
  }

  return (
    <>
      {itemsCarrito.length === 0 ? (
        <>
          <h4>No hay Productos! Agrega algunos</h4>
          <Link to={"/"}>
            <button className="btn btn-secondary">Volver</button>
          </Link>
        </>
      ) : (
        <>
          {itemsCarrito.map((element) => (
            <CartItem
              item={element.item}
              quantity={element.quantity}
              removeItem={removeItem}
              key={element.id}
            />
          ))}
          
          <button className="btnVaciar"  onClick={() => clear()}>
            Vaciar carrito
          </button>
          <h4 className="tituloTotal m-4">Total : USD ${tot.toFixed(3)}</h4>
          <Link to={"/"} > <button className="btnVaciar"><FontAwesomeIcon icon={faArrowLeftLong} />   Volver</button> </Link> 
          <div className="d-flex justify-content-end m-4"><button className="btnCheckout" onClick={buy}>Finalizar Compra   <FontAwesomeIcon icon={ faCircleCheck}/></button></div>
          
        </>
        
      )}
    </>
  );
};

export default Cart;