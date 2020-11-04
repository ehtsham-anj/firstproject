import React from 'react'
import { Nav, Form } from 'react-bootstrap'

function New() {

  return (

    <div>
      <div>&nbsp;</div>
      <h5>Category</h5>

      <Nav defaultActiveKey="/Women" className="flex-column">
        <Nav.Link href="/jewel">Jewelry</Nav.Link>
        <Nav.Link eventKey="/handbag">Handbags</Nav.Link>
        <Nav.Link eventKey="/watch">Watches</Nav.Link>
        <div>&nbsp;</div>
        <h5>Price</h5>
        <Form>

          <Nav.Link href="/jewel">Under $50</Nav.Link>
          <Nav.Link eventKey="/handbag">$50 to $100</Nav.Link>
          <Nav.Link eventKey="/watch">$100 to $500</Nav.Link>
          <Nav.Link href="/jewel">$500 to $1000</Nav.Link>
          <Nav.Link eventKey="/handbag">$1000 to $5000</Nav.Link>
          <Nav.Link eventKey="/watch">$5000 and Above</Nav.Link>
          <div>&nbsp;</div>
          <h5>Size</h5>
          <div>
            <input type="checkbox" id="small" name="small" />
            <label for="small">&nbsp;&nbsp; Small</label>
          </div>
          <div>
            <input type="checkbox" id="small" name="small" />
            <label for="small">&nbsp;&nbsp; Medium</label>
          </div>
          <div>
            <input type="checkbox" id="small" name="small" />
            <label for="small">&nbsp;&nbsp; Large</label>
          </div>

        </Form>
      </Nav>
    </div>
  )
}

export default New;