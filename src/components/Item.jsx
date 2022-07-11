import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";

const Items = (props) => {
  console.log(props.datos.carMake);

  return (
    <>
      <Container fluid>
        <Row className="g-2">
          <Col>
            <Card style={{ width: "18rem" }}>
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
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Items;
