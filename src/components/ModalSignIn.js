import React,{useState}  from 'react'
import {Form,Button,Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import'./Dropdown.css'

function ModalSignIn(){
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <div>
           {/* Sign in modal starts */}

    <div>
      <Button className="ml-3" variant="primary" onClick={handleShow}>
        Sign In
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
        <Modal.Title className="text-danger">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>

  {/*sign in form starts  */}
  <div className="m-auto col-10">
<Form  >
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
  <div style={{marginBottom:10}}><Link className="text-danger">Forget Password</Link></div>
  
  <Button variant="primary" type="Sign In">
    Sign In
  </Button>
</Form>
</div>
{/* Sign in form ends */}

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

      {/* sign in modal ends */}


        </div>

    );
}
export default ModalSignIn;