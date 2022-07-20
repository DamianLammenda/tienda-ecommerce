import React from 'react'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import ItemCount from '../itemCount/ItemCount';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const onAddItem = (count) => {
  alert(`${count} items agregados al carrito!`);
};

const Items = (props) => {
 

  return (
    <>
      <Container fluid >
        <Row  md={4}  >
          <Col className='mb-5'  >
            <Card >
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
             <Link to={"/item"}> <Button size="sm"variant="dark">+INFO </Button></Link>
              <ItemCount stock={5} initial={0} onAdd={onAddItem} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Items;
