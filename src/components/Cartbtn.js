import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'


const Cartbtn = () => {
 
    return (
        <div>
            <div className="ml-3 cart"><Link to="cart">
<Button className="cartbtn " variant="outline-primary">Cart
<img src="cart1.png" alt="cart"></img></Button></Link>
</div>
        </div>
    )
}

export default Cartbtn



