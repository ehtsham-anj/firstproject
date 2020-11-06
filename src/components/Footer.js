import React from 'react'
import './Dropdown.css'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div>
                  <div className="footer py-5">
  <div className="contact"><Link to="/contact">Contact Us</Link></div>
</div>
        </div>
    )
}

export default Footer
