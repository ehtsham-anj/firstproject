import React, {useState} from 'react'
import './Dropdown.css'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'


const Reviews = () => {
    
   
    const [cart, setCart]=useState([]);
    const[Products]=useState([
     {
         name:'Branded Shoes',
         cost:'$150.00',
         image:'/images/f2.jpg '
     }   
    ])
    const addtoCart=(product)=>{
        setCart([...cart, product])
    }
    return (
        <>
       
      
        <div className="small-container">
        {/* <header>
      <Link to="/cart"><Button>go to cart ({cart.length})</Button></Link>  
        </header> */}
            <h1 className="text-center text-danger my-5 w-100 bg-light-blue">Special Deals</h1>
            <div className="row">
            {Products.map((product) =>(
              <div className="col-3">
            <img src={product.image} alt={product.name}/>
            <h4>{product.name}</h4>
            <p>{product.cost}</p>
         <Button onClick={()=> addtoCart(product)} className="mt-3"
           variant="primary" >
        Add to Cart
      </Button>

        </div>
        ))}
            
                <div className="col-3">
                    <img src="/images/s3.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>
                </div>
                <div className="col-3">
                    <img src="/images/s3.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>
                </div>
                <div className="col-3">
                    <img src="/images/f2.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>
                </div>
             
            
            </div>
            <div className="row">
                <div className="col-3">
                    <img src="/images/f1.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>
                </div>
                <div className="col-3">
                    <img src="/images/f1.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>
                </div>
                <div className="col-3">
                    <img src="/images/f1.jpg" alt="p1"/>
                    <h4>Branded Shoes</h4>
                    <p>$150.00</p>
                </div>
                <div className="col-3">
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
