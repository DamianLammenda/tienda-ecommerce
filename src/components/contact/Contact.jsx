import React from "react";
import "../contact/contact.css";
import Swal from "sweetalert2";

const Contact = () => {
    function enviar (e) {
        e.preventDefault();
        if (document.getElementById("name").value === "" || document.getElementById("email").value === "" || document.getElementById("text").value === "") {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Por favor complete todos los campos",
                confirmButtonText: "Aceptar",
                
            });
        } else {
            Swal.fire({
                icon: "success",
                title: "Enviado",
                text: "Mensaje enviado correctamente",
                confirmButtonText: "Aceptar",
                preConfirm: () => {
                    window.location.href = "/";
                }
            });
        }
    }

    return (
      <>
        <h1 className="formulario text-center fw-bolder bg-secondary m-4">Formulario de Contacto</h1>
        <form className="formulario m-4">
          <div>
            <span htmlFor="name" className="input-group-text">Nombre</span>
            <input type="text" id="name" name="name" placeholder="Nombre" />
          </div>
          <div>
            <span htmlFor="lastName" className="input-group-text">Apellido</span>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Apellido"
            />
          </div>
          <div>
            <span htmlFor="email" className="input-group-text">Correo</span>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo Electrónico"
              required
            />
          </div>

          <div>
            <span className="input-group-text">Dejanos tu comentario</span>
            <textarea
              className="form-control"
              aria-label="With textarea"
              type="text"
              id="text"
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={enviar}> Enviar</button>
        </form>
      </>
    );
    
}
 

export default Contact; 