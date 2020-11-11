import React from 'react';
import { Row, Container, Col,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Pants() {
  return (
    <div>
     <h1 className="text-center text-danger my-5">Men Pants</h1>
      <Container fluid>
        <Row className="px-5 py-5">
         <Col>
          <img src="https://slimages.macys.com/is/image/MCY/products/6/optimized/8353076_fpx.tif?op_sharpen=1&wid=591&fit=fit,1&$filtersm$&fmt=webp" width="100%" />
            <div>
             Haggar
             Men's Cool 18
             $29.99
            </div>
              <Link to='/cart'>  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> </Col>
        <Col>
         <img src="https://slimages.macys.com/is/image/MCY/products/2/optimized/8353082_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$" width="100%" />
            <div>
            Club Room
            Men's Stretch Pants
            $29.99
            </div>
            <Link to='/cart'>  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> </Col>
        <Col>
         <img src="https://slimages.macys.com/is/image/MCY/products/1/optimized/9119701_fpx.tif?op_sharpen=1&wid=591&fit=fit,1&$filtersm$&fmt=webp" width="100%" />" width="100%" />
        <div>
        Levi's
        Levi’s® Flex Men's 514™ Straight-Fit Jeans
        $37.00
        </div>
         <Link to='/cart'>  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> </Col></Row >

         <Row className="px-5 py-5">
            <Col>
             <img src="https://slimages.macys.com/is/image/MCY/products/8/optimized/3864038_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$" width="100%" />
            <div>
            Levi's
            Men's 502™ Taper Jeans 
            $37.99 </div>
            <Link to='/cart'>  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> </Col>
        <Col>
         <img src="https://slimages.macys.com/is/image/MCY/products/3/optimized/16511113_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$" width="100%" />
         <div>
           Calvin Klein
           Men's Jeans                           
           $49.99
        </div><Link to='/cart'>  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> </Col>
        <Col> <img src="https://slimages.macys.com/is/image/MCY/products/0/optimized/3799180_fpx.tif?op_sharpen=1&wid=591&fit=fit,1&$filtersm$&fmt=webp" width="100%" />
       <div>
        Tommy Hilfiger
        Men's Maxwell Pants                 
        $44.00</div>
        <Link to='/cart'>  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> </Col></Row>
                    
        <Row className="px-5 py-5">
        <Col>
          <img src="https://slimages.macys.com/is/image/MCY/products/6/optimized/9350316_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$" width="100%" />
            <div>
            Perry Ellis Portfolio
            Classic-Fit Men's Dress Pants 
            $34.55</div>
            <Link to='/cart'>  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link></Col>
        <Col>
           <img src="https://slimages.macys.com/is/image/MCY/products/7/optimized/727467_fpx.tif?op_sharpen=1&wid=591&fit=fit,1&$filtersm$&fmt=webp" width="100%" />
            <div>
            Tommy Hilfiger
            Men's Custom-Fit Pants
            $24.90</div>
            <Link to='/cart'>  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> </Col>
        <Col>
         <img src="https://slimages.macys.com/is/image/MCY/products/7/optimized/727467_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$" width="100%" />
        <div>
          Perry Ellis Portfolio
          Classic Fit Flat Sharkskin
          $44.77 </div>
        <Link to='/cart'>  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> </Col></Row>
        <Row className="px-5 py-5">
        <Col>
        <img src="https://slimages.macys.com/is/image/MCY/products/3/optimized/9119653_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$" width="100%" />
        <div>
          Dockers
          Men's Easy Classic Pleated Pants 
          $54.93</div>
        <Link to='/cart'>  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> </Col>
        <Col>
         <img src="https://slimages.macys.com/is/image/MCY/products/1/optimized/9119701_fpx.tif?op_sharpen=1&wid=591&fit=fit,1&$filtersm$&fmt=webp" width="100%" />
        <div>
          Calvin Klein
          Men's Birdseye Pants
          $34.55 </div>
        <Link to='/cart'>  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> </Col>
        <Col>
        <img src="https://slimages.macys.com/is/image/MCY/products/2/optimized/12925032_fpx.tif?op_sharpen=1&wid=591&fit=fit,1&$filtersm$&fmt=webp" width="100%" />
         <div>
            Calvin Klein
            Alpha Smart 360 Flex 
            $65.55
         </div>
        <Link to='/cart'>  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> 
       </Col>
       </Row>
       </Container>

        </div>
    )
}

export default Pants;