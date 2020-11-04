import React from 'react'
import { Grid,Container,Row,Col } from 'react-bootstrap'
import New from './Navi';
import Link1 from './Link';

function Dresses() {
    return (
        <div>
            <Container fluid>
  <Row>
    <Col xs={2}><New/></Col>
   
    <Col><Link1/></Col>
  
    </Row>
</Container>
        
        </div>
    )
}
export default Dresses;
