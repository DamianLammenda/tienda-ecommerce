import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import ItemCount from './ItemCount';
import laptop from "./imgs/laptop.png"
import sale from "./imgs/sale.png"
import Badge from 'react-bootstrap/Badge';
import { Monitor } from '@mui/icons-material';


const Cards = () => {
    return ( 
        <>
        <Container >
    <Row className="g-5">
        
    <Col >
        <Card bg="dark" text='light' style={{ width: '18rem' }} >
          <Card.Img className="imgsale" src={sale} />
          <Card.Img className="imgItem" variant="top" src={laptop} />
          <Card.Body>
              <div className="badge">
              <Badge className='badgeOff' bg="warning" text='dark'>$ 900.00</Badge>
              <Badge bg="warning" text='dark'>$ 853.00</Badge>
              </div>
            <Card.Title>MacBook Pro 16" M1 Pro 1 TB - Plateado (Silver) 
            </Card.Title>
            <Card.Text className='cardText'>
            La potencia de los ultrarrápidos chips M1 Pro y M1 Max te permite disfrutar un rendimiento revolucionario con una excepcional duración de la batería. Además, la MacBook Pro trae una espectacular pantalla Liquid Retina XDR y todos los puertos que necesitas. 
            </Card.Text>
            <Card.Text><ItemCount /></Card.Text>
          </Card.Body>
        </Card>
      </Col> 
      <Col>
        <Card bg="dark" text='light' style={{ width: '18rem' }} >
        <Card.Img className="imgsale" src={sale} />
          <Card.Img className="imgItem" variant="top" src={laptop} />
          <Card.Body>
              <div className="badge">
              <Badge className='badgeOff' bg="warning" text='dark'>$ 900.00</Badge>
              <Badge bg="warning" text='dark'>$ 853.00</Badge>
              </div>
            <Card.Title>MacBook Pro 16" M1 Pro 1 TB - Plateado (Silver) 
            </Card.Title>
            <Card.Text className='cardText'>
            La potencia de los ultrarrápidos chips M1 Pro y M1 Max te permite disfrutar un rendimiento revolucionario con una excepcional duración de la batería. Además, la MacBook Pro trae una espectacular pantalla Liquid Retina XDR y todos los puertos que necesitas. 
            </Card.Text>
            <Card.Text><ItemCount /></Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="dark" text='light' style={{ width: '18rem' }} >
        <Card.Img className="imgsale" src={sale} />
          <Card.Img className="imgItem" variant="top" src={laptop} />
          <Card.Body>
              <div className="badge">
              <Badge className='badgeOff' bg="warning" text='dark'>$ 900.00</Badge>
              <Badge bg="warning" text='dark'>$ 853.00</Badge>
              </div>
            <Card.Title>MacBook Pro 16" M1 Pro 1 TB - Plateado (Silver) 
            </Card.Title>
            <Card.Text className='cardText'>
            La potencia de los ultrarrápidos chips M1 Pro y M1 Max te permite disfrutar un rendimiento revolucionario con una excepcional duración de la batería. Además, la MacBook Pro trae una espectacular pantalla Liquid Retina XDR y todos los puertos que necesitas. 
            </Card.Text>
            <Card.Text><ItemCount /></Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="dark" text='light' style={{ width: '18rem' }} >
        <Card.Img className="imgsale" src={sale} />
          <Card.Img className="imgItem" variant="top" src={laptop} />
          <Card.Body>
              <div className="badge">
              <Badge className='badgeOff' bg="warning" text='dark'>$ 900.00</Badge>
              <Badge bg="warning" text='dark'>$ 853.00</Badge>
              </div>
            <Card.Title>MacBook Pro 16" M1 Pro 1 TB - Plateado (Silver) 
            </Card.Title>
            <Card.Text className='cardText'>
            La potencia de los ultrarrápidos chips M1 Pro y M1 Max te permite disfrutar un rendimiento revolucionario con una excepcional duración de la batería. Además, la MacBook Pro trae una espectacular pantalla Liquid Retina XDR y todos los puertos que necesitas. 
            </Card.Text>
            <Card.Text><ItemCount /></Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>    
        </Container>
        
        </>
      
      );
      
}
 
export default Cards;

