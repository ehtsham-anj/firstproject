import React, { useState } from 'react';
import { Row, Container, Col,Button, } from 'react-bootstrap';
import {Link} from 'react-router-dom'

import {connect} from 'react-redux';
import {addCart} from '../../../actions/addAction'


const Infants = (props) => {
    console.log(props);


    return (
        <div>
            <h1 className="text-center text-danger my-5">Infant Shopping</h1>
            <Container fluid>
                <Row className="px-5 py-5">
                    <Col>
                        <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/i1-bdf349c5-4d1a-44c5-a986-d090b69f73db/baby-bodysuit-bib-and-booties-set-LmWvZK.jpg" width="100%"   alt="Baby Bodysuit"  />
                        <div>
                        Baby Bodysuit, Bib and Booties Set
                        Nike
                            $22.00
                        </div>
                     <Link onClick={ () => props.addCart("babyBodysuit")}  >  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> 
                    </Col>
                    <Col>
                         <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/d2f62e61-3d38-4e8e-92fb-3fda13b2e0b7/toddler-tracksuit-cPPw22.jpg" width="100%" alt="toddlerTracksuit" />
                        <div>
                        Toddler Tracksuit
                        Nike
                            $48.00
                        </div>
                        <Link onClick={() => props.addCart("toddlerTracksuit")}   >  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> 
                    </Col>
                    <Col>
                        <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/4355ccfa-a1e7-460d-84a8-f411765f1861/swoosh-baby-0-9m-full-zip-coverall-kZHSwS.jpg" width="100%" alt="babyFullzip"/>
                        <div>
                        Baby (0-9M) Full-Zip Coverall
                        Nike Swoosh
                            $45.00
                        </div>
                        <Link onClick={() => props.addCart("babyFullzip")}  >  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> 
                    </Col>
                </Row >
                <Row className="px-5 py-5">
                    <Col>
                        <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/mmheqpeqkm5jrwmenyod/sportswear-tech-fleece-toddler-hoodie-and-pants-set-xH9XGq.jpg" width="100%"  alt="toddlerHoodie" />
                        <div>
                        Toddler Hoodie and Pants Set
                        Nike Sportswear Tech Fleece                            
                            $95.00
                        </div>
                        <Link onClick={() => props.addCart("toddlerHoodie")}  >  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> 
                    </Col>
                    <Col>
                        <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/af07a1e3-3533-4df6-a426-d01f375e560b/air-toddler-crew-cCMZql.jpg" width="100%"  alt="toddlerCrew"   />
                        <div>
                        Toddler Crew
                        Nike Air                           
                            $77.00
                        </div>          
                        <Link onClick={() => props.addCart("toddlerCrew")}  >  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> 
                        </Col>
                    <Col>
                        <img src="https://www.gap.com/webcontent/0018/885/998/cn18885998.jpg" width="100%" alt="kidsYellow" />
                        <div>
                        Kids Yellow Denim Shortalls                   
                            $68.00
                        </div>
                        <Link onClick={() => props.addCart("kidsYellow")}  >  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> 
                     </Col>
                     </Row>
                    <Row className="px-5 py-5">
                    <Col>
                        <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/ef717fab-fe21-45f7-82ea-4f973eb4f8cf/toddler-top-and-leggings-set-prcwCT.jpg" width="100%"  alt="toddlerTop" />
                        <div>
                        Toddler Top and Leggings Set
                        Nike
                            $44.55
                        </div>
                        <Link onClick={() => props.addCart("toddlerTop")}  >  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> 
                    </Col>
                    <Col>
                        <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/nkimmz4tgyukybywskqt/toddler-gripper-ankle-socks-3-pairs-scQFK4.jpg" width="100%"  alt="toddlerGripper" />
                        <div>
                        Toddler Gripper Ankle Socks (3 Pairs)
                        Nike
                            $12.00
                        </div>
                        <Link onClick={() => props.addCart("toddlerGripper")} >  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> 
                    </Col>
                    <Col>
                        <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/tb7h71neloldsskdxqhh/baby-0-6m-hat-and-booties-box-set-qDXgKk.jpg" width="100%" alt="babyHat" />
                        <div>
                        Baby (0-6M) Hat and Booties Box Set
                        Nike
                            $15.00
                        </div>
                        <Link onClick={() => props.addCart("babyHat")} >  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> 
                    </Col>
                    </Row>
                    <Row className="px-5 py-5">
                    <Col>
                        <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6ad2cc48-1412-469b-9939-e14f0bed2bd7/free-rn-5-baby-toddler-shoe-KNMzDG.jpg" width="100%" alt="babyToddlershoe1" />
                        <div>
                        Baby/Toddler Shoe
                        Nike Free RN 5.0
                            $50.00
                        </div>
                        <Link  onClick={() => props.addCart("babyToddlershoe1")} >  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> 
                    </Col>
                    <Col>
                        <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2616ba7f-664e-4b5e-a9e9-047c928568e6/kawa-se-baby-toddler-slide-rQSC5p.jpg" width="100%" alt="babyToddlerslide" />
                        <div>
                        Baby/Toddler Slide
                        Nike Kawa SE
                            $24.55
                        </div>
                        <Link onClick={() => props.addCart("babyToddlerslide")}  >  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> 
                    </Col>
                    <Col>
                        <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5027a43f-ce24-48f0-9647-c9333ba7301d/pico-5-lil-baby-toddler-shoe-Xx53ZH.jpg" width="100%" alt="babyToddlershoe2" />
                        <div>
                        Baby/Toddler Shoe
                        Nike Pico 5 Lil
                            $35.55
                        </div>
                        <Link onClick={() => props.addCart("babyToddlershoe2")}  >  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> 
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default connect(null, {addCart}) (Infants);