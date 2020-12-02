import React,{useState}  from 'react'
import {Form,Button,Modal} from 'react-bootstrap'
import './Dropdown.css'

function ModalRegister(){
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <div>
            
       {/* registration modal starts */}
<div className="signupbtn">
    <Button  variant="warning" onClick={handleShow}>
        Sign Up
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>

  {/*registration form starts  */}
  <div className="m-auto col-10">
<Form  >
  
<Form.Group controlId="formBasicEmail" >
  
    <Form.Label>First Name</Form.Label>
    <Form.Control type="email" placeholder="User Name" />
    <Form.Text className="text-muted">  
    </Form.Text>
    <Form.Group controlId="formBasicEmail" >
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="email" placeholder="User Name" />
    <Form.Text className="text-muted">  
    </Form.Text>
  </Form.Group>
  </Form.Group><Form.Group controlId="formBasicEmail" >
    <Form.Label>Username</Form.Label>
    <Form.Control type="email" placeholder="User Name" />
    <Form.Text className="text-muted">  
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Phone No</Form.Label>
    <Form.Control type="password" placeholder="Phone No" />
  </Form.Group>
  
  <Button variant="primary" type="Sign Up">
    Sign Up
  </Button>
</Form>
</div>
{/* registration form ends */}

</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</div>
      {/* registration modal ends */}

        </div>
    );
}
export default ModalRegister;