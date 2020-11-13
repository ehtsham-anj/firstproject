import React from 'react'
import './Dropdown.css'
import {  Button,Form,FormGroup,Dropdown,DropdownButton} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'

const Payment = () => {
    const handleToken=(Token)=>{
        
    }
    return (
        <div >
            <h1 style={{marginLeft:66, marginTop:50}} className="text-danger" >PAYMENT DETAILS</h1>
           
            <div  style={{marginLeft:130 , marginTop:10}} className="stripeSection  ">
    <StripeCheckout
    stripeKey="pk_test_51HmlhFKczKqS8F7t7um6dlIX8DKWWMOxTFYnb4qbyoTGooKESYSQFp1Ia7Sxs6tKnLDRexagIcOoViB7ifjts3Cr0014MCovqw"
    token={handleToken}
    billingAddress
    shippingAddress
    amout
    name="All products"

    >

    </StripeCheckout>
</div>

            
        </div>
    )
}

export default Payment
