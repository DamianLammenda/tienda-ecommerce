import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import ItemCount from './ItemCount';
import Badge from 'react-bootstrap/Badge';


const Cards = () => {
    return ( 
        <>
        <Container >
    <Row className="g-5">
        
    <Col >
        <Card style={{ width: '18rem' }} >
          <Card.Img className="imgsale" src="https://t4.ftcdn.net/jpg/02/77/47/45/360_F_277474583_Aj3DMDmloGqsckb1qs5OsOztc039Td3U.webp" />
          <Card.Img className="imgItem" variant="top" src="https://www.notebookcheck.org/uploads/tx_nbc2/air13teaser.jpg" />
          <Card.Body>
              <div className="badge">
              <Badge className='badgeOff' bg="warning" text='dark'>$ 900.00</Badge>
              <Badge bg="warning" text='dark'>$ 853.00</Badge>
              </div>
            <Card.Title>MacBook Pro 16" M1 Pro 1 TB - Plateado (Silver) 
            </Card.Title>
            <Card.Text>
            La potencia de los ultrarrápidos chips M1 Pro y M1 Max te permite disfrutar un rendimiento revolucionario con una excepcional duración de la batería. Además, la MacBook Pro trae una espectacular pantalla Liquid Retina XDR y todos los puertos que necesitas. 
            </Card.Text>
            <Card.Text><ItemCount /></Card.Text>
          </Card.Body>
        </Card>
      </Col> 
      <Col>
        <Card style={{ width: '18rem' }} >
          <Card.Img className="imgsale" src="https://t4.ftcdn.net/jpg/02/77/47/45/360_F_277474583_Aj3DMDmloGqsckb1qs5OsOztc039Td3U.webp" />
          <Card.Img className="imgItem" variant="top" src="https://www.notebookcheck.org/uploads/tx_nbc2/air13teaser.jpg" />
          <Card.Body>
              <div className="badge">
              <Badge className='badgeOff' bg="warning" text='dark'>$ 900.00</Badge>
              <Badge bg="warning" text='dark'>$ 853.00</Badge>
              </div>
            <Card.Title>MacBook Pro 16" M1 Pro 1 TB - Plateado (Silver) 
            </Card.Title>
            <Card.Text>
            La potencia de los ultrarrápidos chips M1 Pro y M1 Max te permite disfrutar un rendimiento revolucionario con una excepcional duración de la batería. Además, la MacBook Pro trae una espectacular pantalla Liquid Retina XDR y todos los puertos que necesitas. 
            </Card.Text>
            <Card.Text><ItemCount /></Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '18rem' }} >
          <Card.Img className="imgsale" src="https://t4.ftcdn.net/jpg/02/77/47/45/360_F_277474583_Aj3DMDmloGqsckb1qs5OsOztc039Td3U.webp" />
          <Card.Img className="imgItem" variant="top" src="https://www.notebookcheck.org/uploads/tx_nbc2/air13teaser.jpg" />
          <Card.Body>
              <div className="badge">
              <Badge className='badgeOff' bg="warning" text='dark'>$ 900.00</Badge>
              <Badge bg="warning" text='dark'>$ 853.00</Badge>
              </div>
            <Card.Title>MacBook Pro 16" M1 Pro 1 TB - Plateado (Silver) 
            </Card.Title>
            <Card.Text>
            La potencia de los ultrarrápidos chips M1 Pro y M1 Max te permite disfrutar un rendimiento revolucionario con una excepcional duración de la batería. Además, la MacBook Pro trae una espectacular pantalla Liquid Retina XDR y todos los puertos que necesitas. 
            </Card.Text>
            <Card.Text><ItemCount /></Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '18rem' }} >
          <Card.Img className="imgsale" src="https://t4.ftcdn.net/jpg/02/77/47/45/360_F_277474583_Aj3DMDmloGqsckb1qs5OsOztc039Td3U.webp" />
          <Card.Img className="imgItem" variant="top" src="https://www.notebookcheck.org/uploads/tx_nbc2/air13teaser.jpg" />
          <Card.Body>
              <div className="badge">
              <Badge className='badgeOff' bg="warning" text='dark'>$ 900.00</Badge>
              <Badge bg="warning" text='dark'>$ 853.00</Badge>
              </div>
            <Card.Title>MacBook Pro 16" M1 Pro 1 TB - Plateado (Silver) 
            </Card.Title>
            <Card.Text>
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






















// function GridExample() {
//   return (
//     <Row xs={1} md={4} className="g-4">
//       {Array.from({ length: 4 }).map((_, idx) => (
//         <Col>
//           <Card >
//             <Card.Img className="imgsale" src="https://t4.ftcdn.net/jpg/02/77/47/45/360_F_277474583_Aj3DMDmloGqsckb1qs5OsOztc039Td3U.webp" />
//             <Card.Img className="imgItem" variant="top" src="https://www.notebookcheck.org/uploads/tx_nbc2/air13teaser.jpg" />
//             <Card.Body>
//                 <div className="badge">
//                 <Badge className='badgeOff' bg="warning" text='dark'>$ 900.00</Badge>
//                 <Badge bg="warning" text='dark'>$ 853.00</Badge>
//                 </div>
//               <Card.Title>MacBook Pro 16" M1 Pro 1 TB - Plateado (Silver) 
//               </Card.Title>
//               <Card.Text>
//               La potencia de los ultrarrápidos chips M1 Pro y M1 Max te permite disfrutar un rendimiento revolucionario con una excepcional duración de la batería. Además, la MacBook Pro trae una espectacular pantalla Liquid Retina XDR y todos los puertos que necesitas. 
//               </Card.Text>
//               <Card.Text><ItemCount /></Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default GridExample;