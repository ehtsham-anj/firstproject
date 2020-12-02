import React, {useState} from 'react'
import './Dropdown.css'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {connect} from 'react-redux';
import {addCart} from '../actions/addAction'



const Reviews = (props) => {
    console.log(props);

    
   
    return (
        <>
       
      
        <div className="small-container">
       
            <h1 className="text-center text-danger my-5 w-100 bg-light-blue">Special Deals</h1>
            <div className="row">
            <div className="col-3">
                    <img src="/images/s3.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>

                    <Link onClick={ () => props.addCart("menshoe1")}  >  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> 
                </div>
                <div className="col-3">
                    <img src="/images/s3.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>
                    <Link onClick={ () => props.addCart("menshoe1")}  >  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> 
                </div>
                <div className="col-3">
                    <img src="/images/s3.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>
                    <Link onClick={ () => props.addCart("menshoe1")}  >  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> 
                </div>
                <div className="col-3">
                    <img src="/images/f2.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>
                    <Link onClick={ () => props.addCart("menshoe1")}  >  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> 
                </div>
             
            
            </div>
            <div className="row">
                <div className="col-3">
                    <img src="/images/f1.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>
                    <Link onClick={ () => props.addCart("menshoe1")}  >  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> 
                </div>
                <div className="col-3">
                    <img src="/images/f1.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>
                    <Link onClick={ () => props.addCart("menshoe1")}  >  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link>   
                </div>
                <div className="col-3">
                    <img src="/images/f1.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>
                    <Link onClick={ () => props.addCart("menshoe1")}  >  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> 
                </div>
                <div className="col-3">
                    <img src="/images/f1.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>
                    <Link onClick={ () => props.addCart("menshoe1")}  >  <Button className="mt-3" variant="primary" >
        Add to Cart
      </Button></Link> 
                </div>
             
            
            </div>
  
  
        </div>
  <Footer/>

        </>
    )
}

export default connect(null, {addCart}) (Reviews);
