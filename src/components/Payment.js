import React from 'react'
import './Dropdown.css'
import {  Button,Form,FormGroup,Dropdown,DropdownButton} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'

const Payment = () => {
    const handleToken=(Token)=>{

    }
    return (
        <div className="paymentContainer">
            <h1  className="text-danger text-center">PAYMENT DETAILS</h1>
           
            <div className="stripeSection text-center ">
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
