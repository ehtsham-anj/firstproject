import React from 'react'
import {  Button,Form,FormGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Dropdown.css'
import UserService from '../service copy/UserService'

const Login = () => {
    return (
        <div className="loginContainer">
          
          <Form className="loginform" style={{width:400}} >
           <h1  className="text-danger text-center ">LOGIN</h1>
  <Form.Group controlId="formBasicEmail" >
  
  </Form.Group>
  <Form.Group controlId="formBasicEmail" >
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="Username" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Check className="mb-3" type="checkbox" label="Rember me" />
  <div style={{marginBottom:10}}><Link className="text-danger">Forget Password</Link></div>
  
 <Button  className="btnpadding mb-3 mt-3" variant="success" type="Sign In">
    Sign In
  </Button>
 
</Form> 
<div className="signuplink text-center mt-3">
    <h3>Not a memebr <Link to="/checkout">Sign up Now</Link></h3>
    </div>  
        </div>
    )
}

export default Login
