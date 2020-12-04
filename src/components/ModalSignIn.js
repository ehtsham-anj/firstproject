import React,{useState}  from 'react'
import {Form,Button,Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import'./Dropdown.css'

function ModalSignIn(){
  //   const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
    return(
        <div>
           {/* Sign in modal starts */}

    <div>
   <Link to ="/login"> <Button className="ml-3" variant="primary">
        Sign In
      </Button></Link> 
      {/* <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
        <Modal.Title className="text-danger">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>

  {/*sign in form starts  */}
 
      </div>

      


        </div>

    );
}
export default ModalSignIn;