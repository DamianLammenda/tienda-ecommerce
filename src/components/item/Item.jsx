import React from 'react'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Items = (props) => {
  return (
    <>
      <Container style={{ width: "18rem" }}>
        <Row className="d-flex  mb-5 flex-nowrap">
          <Col>
            <Card>
              <Card.Img variant="top" src={props.datos.carImg} />
              <Card.Body>
                <Card.Title>Marca: {props.datos.carMake}</Card.Title>
                <Card.Text>Modelo: {props.datos.carModel}</Card.Text>
                <Card.Text>Año: {props.datos.carYear}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Stock disponible: {props.datos.carStock}
                </small>
              </Card.Footer>
              <Link to={`/item/${props.datos.id}`}>
                <Button className="btn btn-dark">+INFO </Button>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Items;
