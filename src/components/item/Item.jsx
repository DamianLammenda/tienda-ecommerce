import React from 'react'
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../item/item.css"
import "../ItemDetail/ItemDetail"

const Items = (props) => {
  return (
    <>
     
          <div className="col m-2" >
            <div className="card card border-light"  >
              <Card.Img className='cardImg' src={props.datos.carImg} />
              <Card.Body >
                <Card.Title> {props.datos.carMake}</Card.Title>
                <Card.Text> {props.datos.carModel}</Card.Text>
                <Card.Text>Año: {props.datos.carYear}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="bg-transparent ">
                  Stock disponible: {props.datos.carStock}
                </small>
              </Card.Footer>
              <Link to={`/item/${props.datos.id}`} className="d-flex justify-content-center m-1 " >
                <Button className='btnInfo'
                  type="button">
                  Me Interesa
                </Button>
              </Link>
            </div>
          </div>
       
    </>
  );
};

export default Items;
