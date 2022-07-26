import React  from 'react'
import { useState } from 'react';
import Col from "react-bootstrap/Col";
import { Button, CardGroup } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import ItemCount from "../itemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ItemDetail = (props) => {
  const [amount, setAmount] = useState(0);
  const naviagate = useNavigate();
  const onAddItem = (count) => {
    setAmount(count);
  };
  return props.loading ? (
    <>
      <Container>
        <Col>
          <Card border="dark" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={props.details.carImg} />
            <Card.Body>
              <Card.Title>Marca: {props.details.carMake}</Card.Title>
              <Card.Text>Modelo: {props.details.carModel}</Card.Text>
              <Card.Text>Año: {props.details.carYear}</Card.Text>
              <Card.Text>Descripción: {props.details.description}</Card.Text>
              <Card.Text>Color: {props.details.color}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Stock disponible: {props.details.carStock}
              </small>
            </Card.Footer>
            <Card.Footer>
              <small>Precio: {props.details.price.toFixed(3)}</small>
            </Card.Footer>
            {amount == 0 ? (
              <ItemCount
                stock={props.details.carStock}
                initial={0}
                onAdd={onAddItem}
              />
            ) : (
              <Link to={"/Cart/"}>
                <Button className="btn btn-warning">Ir al Carrito </Button>
              </Link>
            )}
          </Card>
        </Col>
      </Container>
    </>
  ) : (
    <>
      <Spinner animation="grow" variant="dark" />
    </>
  );
};


export default ItemDetail;
