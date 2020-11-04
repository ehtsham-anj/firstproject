import React from 'react'
import {Carousel} from 'react-bootstrap'
import Reviews from './Reviews'



function MySlider(){
    return(
  <div  >  
<Carousel   >
  <Carousel.Item>
   
    <img
      className="img-fluid w-100 "
      src="s3.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    <h1 className="bg">hello world</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-fluid w-100 "
      src="s2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-fluid w-100 "
      src="s1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div>
<Reviews/> 
</div>

</div>  
    )
}
export default MySlider;