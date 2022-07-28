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
     
          <div className="col m-2" >
            <div className="card card border-light"  >
              <Card.Img src={props.datos.carImg}  style={{height: "40vh"}} />
              <Card.Body >
                <Card.Title>Marca: {props.datos.carMake}</Card.Title>
                <Card.Text>Modelo: {props.datos.carModel}</Card.Text>
                <Card.Text>Año: {props.datos.carYear}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="bg-transparent ">
                  Stock disponible: {props.datos.carStock}
                </small>
              </Card.Footer>
              <Link to={`/item/${props.datos.id}`} className="d-flex justify-content-center m-1 " >
                <Button
                  type="button"
                   
                  style={{ fontSize: "0.7rem" }}
                >
                  +INFO
                </Button>
              </Link>
            </div>
          </div>
       
    </>
  );
};

export default Items;
