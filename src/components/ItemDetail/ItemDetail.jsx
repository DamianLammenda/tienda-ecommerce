import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner';

const ItemDetail = (props) => {
  console.log(props.details)
  return props.loading ? (
    <>
      <Container fluid>
        <Row className="g-2">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={props.details.carImg} />
              <Card.Body>
                <Card.Title>Marca: {props.details.carMake}</Card.Title>
                <Card.Text>Modelo: {props.details.carModel}</Card.Text>
                <Card.Text>Año: {props.details.carYear}</Card.Text>
                <Card.Text>Descripción: {props.details.description}</Card.Text>
                <Card.Text>Color: {props.details.color}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Stock disponible: {props.details.carStock}</small>
              </Card.Footer>
              <Card.Footer>
                <small>Precio: {props.details.price.toFixed(3)}</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  ) : (
    <>
        <Spinner animation="grow" variant="dark" />
    </>
  );
};


export default ItemDetail;
