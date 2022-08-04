import React from 'react'
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import logo from "../imgs/logo.png";
import CartWidget from "../cartWidget/CartWidget";
import { Link } from "react-router-dom";
import  "../navBar/navBar.css"

const NavBar = () => {
  return (
    <Navbar className='navBar ' sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to={"/"}>
          <Navbar.Brand href="#home">
            <img style={{ width: 40 }} src={logo} alt="logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"}>
              <Nav.Link  href="#home">Inicio</Nav.Link>
            </Link>
            <Link to={"/"}>
              <Nav.Link href="#features">Productos</Nav.Link>
            </Link>
            <NavDropdown  title="Lista de Vehículos"  >
              <NavDropdown.Item eventKey="4.1" >
                <Link className='linkName'  to={"/category/sedan"}>Sedan</Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link className='linkName' to={"/category/truck"}>Camioneta</Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">
                <Link className='linkName' to={"/category/coupe"}>Coupe</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">
                <Link className='linkName' to={"/"}>Todos los vehículos</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>  
          <Nav className="d-flex">
            <Link to={"/cart"}>
              <Nav.Link href="#features">
                <CartWidget />
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
