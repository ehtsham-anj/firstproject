  
import React from 'react';
import { Row, Container, Col,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Shoes() {
  return (
    <div>
     <h1 className="text-center text-danger my-5">Men Pants</h1>
      <Container fluid>
        <Row className="px-5 py-5">
         <Col>
          <img src="https://slimages.macys.com/is/image/MCY/products/4/optimized/17314554_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$" width="100%" />
            <div>
            Dockers
            Men's Pierdon Dress Oxford
             $59.99
            </div>
              <Link to='/cart'>  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> </Col>
        <Col>
         <img src="https://slimages.macys.com/is/image/MCY/products/2/optimized/3697172_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$" width="100%" />
            <div>
            Clarks
            Men's Tilden Cap Toe Oxford
            $59.99
            </div>
            <Link to='/cart'>  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> </Col>
        <Col>
        <img src="https://slimages.macys.com/is/image/MCY/products/1/optimized/8814201_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$" width="100%" />
        <div>
        Clarks
        Men's Tilden Cap Toe Oxford
        $59.99
        </div>
         <Link to='/cart'>  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> </Col></Row >

         <Row className="px-5 py-5">
            <Col>
             <img src="https://slimages.macys.com/is/image/MCY/products/3/optimized/3009443_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$" width="100%" />
            <div>
            Dockers
            Manvel Oxfords 
            $49.99 </div>
            <Link to='/cart'>  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> </Col>
        <Col>
         <img src="https://slimages.macys.com/is/image/MCY/products/3/optimized/3009443_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$" width="100%" />
         <div>
           Calvin Klein
           Manvel Oxfords                           
           $89.99
        </div><Link to='/cart'>  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> </Col>
        <Col> <img src="https://slimages.macys.com/is/image/MCY/products/1/optimized/16233851_fpx.tif?op_sharpen=1&wid=591&fit=fit,1&$filtersm$&fmt=webp" width="100%" />
       <div>
       Clarks
       Men's Whiddon Cap-Toe Oxfords                 
        $59.00</div>
        <Link to='/cart'>  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> </Col></Row>
                    
        <Row className="px-5 py-5">
        <Col>
          <img src="https://slimages.macys.com/is/image/MCY/products/1/optimized/11387381_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$" width="100%" />
            <div>
            Isotoner Signature
            Men's Zenz Sport-Knit Slippers 
            $46.55</div>
            <Link to='/cart'>  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link></Col>
        <Col>
           <img src="https://slimages.macys.com/is/image/MCY/products/3/optimized/17931193_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$" width="100%" />
            <div>
            Isotoner Signature
            Eco Comfort Slipper
            $34.90</div>
            <Link to='/cart'>  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> </Col>
        <Col>
         <img src="https://slimages.macys.com/is/image/MCY/products/8/optimized/17874248_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$ " width="100%" />
        <div>
        Weatherproof Vintage
        Men's Faux-Shearling Slippers
          $44.77 </div>
        <Link to='/cart'> <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> </Col></Row>
        <Row className="px-5 py-5">
        <Col>
        <img src="https://slimages.macys.com/is/image/MCY/products/9/optimized/680899_fpx.tif?op_sharpen=1&wid=591&fit=fit,1&$filtersm$&fmt=webp" width="100%" />
        <div>
        Timberland
        Men’s Waterproof Boots 
          $198</div>
        <Link to='/cart'><Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> </Col>
        <Col>
         <img src="https://slimages.macys.com/is/image/MCY/products/7/optimized/16265867_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$" width="100%" />
        <div>
          Calvin Klein
          Men's Birdseye Shoes
          $134.55 </div>
        <Link to='/cart'>  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> </Col>
        <Col>
        <img src="https://slimages.macys.com/is/image/MCY/products/4/optimized/17700594_fpx.tif?op_sharpen=1&wid=591&fit=fit,1&$filtersm$&fmt=webp" width="100%" />
         <div>
            Timberland
            Men's Courma Guy 6" Boots 
            $205.55
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

export default Shoes;
