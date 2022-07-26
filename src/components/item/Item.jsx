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
      <Container >
        <Row className="  mb-5 ">
          <Col className='col-md-4 '>
            <Card >
              <Card.Img style={{width:"18em"}} variant="top" src={props.datos.carImg} />
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
