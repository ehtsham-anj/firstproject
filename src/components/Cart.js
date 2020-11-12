import React from 'react'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Cart = () => {
    return (
        <div>
            <h1>this is my cart page</h1>
           <Link to="/checkout"> <Button>checkout</Button></Link>
        </div>
    )
}

export default Cart
