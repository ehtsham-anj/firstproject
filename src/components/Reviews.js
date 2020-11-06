import React from 'react'
import './Dropdown.css'
import Footer from './Footer'

const Reviews = () => {
    return (
        <>
        <div className="small-container">
            <h1 className="text-center text-danger my-5 w-100 bg-light-blue">Featured Products</h1>
            <div className="row">
                <div className="col-4">
                    <img src="/images/f2.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>
                </div>
                <div className="col-4">
                    <img src="/images/s3.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>
                </div>
                <div className="col-4">
                    <img src="/images/s3.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>
                </div>
                <div className="col-4">
                    <img src="/images/f2.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>
                </div>
             
            
            </div>
            <div className="row">
                <div className="col-4">
                    <img src="/images/f1.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>
                </div>
                <div className="col-4">
                    <img src="/images/f1.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>
                </div>
                <div className="col-4">
                    <img src="/images/f1.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>
                </div>
                <div className="col-4">
                    <img src="/images/f1.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>
                </div>
             
            
            </div>
  
  
        </div>
  <Footer/>

        </>
    )
}

export default Reviews
