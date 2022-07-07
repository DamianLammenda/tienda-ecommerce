import {
  Navbar,
  Container,
  Nav,
  NavLink,
  NavItem,
  NavDropdown,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import logo from "./imgs/logo.png"
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img style={{width:40}} src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
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
            <Nav.Link href="#features">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
