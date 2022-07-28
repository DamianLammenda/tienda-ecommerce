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
import style from "../styles/navBar.css"

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
              <Nav.Link  href="#home">Home</Nav.Link>
            </Link>
            <Link to={"/"}>
              <Nav.Link href="#features">Products</Nav.Link>
            </Link>
            <NavDropdown  title="Cars List" id="nav-dropdown" >
              <NavDropdown.Item eventKey="4.1">
                <Link className='linkName' to={"/category/sedan"}>Sedan</Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link className='linkName' to={"/category/truck"}>Truck</Link>{" "}
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">
                <Link className='linkName' to={"/category/coupe"}>Coupe</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">
                <Link className='linkName' to={"/"}>All Cars</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="me-4" variant="outline-success">
              Search
            </Button>
          </Form>
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
