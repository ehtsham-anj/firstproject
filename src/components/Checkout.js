import React from 'react'
import './Dropdown.css'
import {  Button,Form,FormGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
import Payment from './Payment'

const Checkout = () => {
    // const handleToken=(Token)=>{

    // }
    return (
        <div className="checkoutContainer">
          <div className="row">
              <div className="col-6" style={{borderRight:"double"}}>
           
           <Form style={{width:400}} >
           <h1  className="text-danger">CHECK OUT</h1>
  <Form.Group controlId="formBasicEmail" >
  
  </Form.Group>
  <Form.Group controlId="formBasicEmail" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Check className="mb-3" type="checkbox" label="Rember me" />
  <div style={{marginBottom:10}}><Link className="text-danger">Forget Password</Link></div>
  
<Link > <Button  className="btnpadding mb-3 mt-3" variant="success" type="Sign In">
    Sign In
  </Button>
  </Link> 
</Form>
<div>
    <Payment/>
</div>
{/* Sign in ends */}

{/* <div className="stripeSection  ">
    <StripeCheckout
    stripeKey="pk_test_51HmlhFKczKqS8F7t7um6dlIX8DKWWMOxTFYnb4qbyoTGooKESYSQFp1Ia7Sxs6tKnLDRexagIcOoViB7ifjts3Cr0014MCovqw"
    token={handleToken}
    billingAddress
    shippingAddress
    amout
    name="All products"

    >

    </StripeCheckout>
</div> */}

</div>





{/* Sign up start */}
<div >
<Form style={{width:400, paddingLeft:60}} >
    <h1  className="text-danger">REGISTRATION</h1>
  
<Form.Group controlId="formBasicEmail" >
  
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="Full Name" />
    <Form.Text className="text-muted">  
    </Form.Text>
    <Form.Group controlId="formBasicEmail" >
    <Form.Label>UserName</Form.Label>
    <Form.Control type="username" placeholder="User Name" />
    <Form.Text className="text-muted">  
    </Form.Text>
  </Form.Group>
  </Form.Group><Form.Group controlId="formBasicEmail" >
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" placeholder="Email" />
    <Form.Text className="text-muted">  
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail" >
    <Form.Label>Password</Form.Label>
    <Form.Control type="Password" placeholder=" Password" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Address</Form.Label>
    <Form.Control type="Address" placeholder="Address" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Phone No</Form.Label>
    <Form.Control type="Mobile No" placeholder="Mobile No" />
  </Form.Group>
  
  <Button className="btnpadreg mt-3" variant="primary" type="Sign Up">
    Sign Up
  </Button>
</Form>
</div>
</div>

{/* Sign up end */}



        </div>
    )
}

export default Checkout
