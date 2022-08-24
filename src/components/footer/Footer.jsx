import React from "react";
import footer from "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeCircleCheck} from "@fortawesome/free-solid-svg-icons";
import Swall from "sweetalert2";
import { Link } from "react-router-dom";

const Footer = () => {
	const sendMail = (e) => {
		e.preventDefault();
		if (document.getElementById("email").value === "") {
      Swall.fire({
        icon: "error",
        title: "Error",
        text: "Por favor complete todos los campos",
        confirmButtonText: "Aceptar",
      });
    } else {
      Swall.fire({
        icon: "success",
        title: "Enviado",
        text: "Te enviaremos por correo las últimas noticias y novedades sobre vehículos destacados, ofertas, y mucho mas!",
        confirmButtonText: "Aceptar",
        preConfirm: () => {
          window.location.href = "/";
        },
      });
    }
	}
    return (
      <>
    <footer className="footer_area ">
			<div className="container">
				<div className="row justify-content-between">				
					<div className="col-md-3 col-sm-6">
						<div className="single_ftr">
							<h4 className="sf_title">Contacto</h4>
							<ul>
								<li>4080 Repperts Coaol Road Sackson, MS 00201 USA</li>
								<li>(+123) 685 78 455 </li>
								<li>Contact@yourcompany.com</li>
							</ul>
						</div>
					</div> 					
					<div className="col-md-3 col-sm-6">
						<div className="single_ftr">
							<h4 className="sf_title">Información</h4>
							<ul>
								<Link to={"/about"}><li><a href="#">Nuestra Empresa</a></li></Link>
								<Link to={"/contact"}><li><a href="#">Contacto</a></li></Link>
							</ul>
						</div>
					</div> 					
					<div className="col-md-3 col-sm-6">
						<div className="single_ftr">
							<h4 className="sf_title">Newsletter</h4>
							<div className="newsletter_form">
								<p>Registrate con tu correo y recibi las ultimas noticias del mercado de vehiculos</p>
								<form method="post" className="form-inline">				
									<input name="email" id="email" placeholder="Escribe tu email" className="form-control" type="email" />
									<button onClick={sendMail} className="btn btn-default">Enviar <FontAwesomeIcon icon={faEnvelopeCircleCheck}/></button>					
								</form>
							</div>
						</div>
					</div> 
					
				</div>
			</div>
	
		
		
		</footer>
      </>
    );
}
 
export default Footer;