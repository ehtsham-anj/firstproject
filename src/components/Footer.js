import React from 'react'
import './Dropdown.css'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className="mainfooter">
            <div class="container">
                <div className="row">
                    <div className="col-4">
                  <div className="footer py-5">
  <div className="contact text-left"><Link to="/contact">Contact Us</Link></div>
  </div>
  
</div>
<div className="col-4">
                  <div className="footer py-5">
  <div className="contact"><Link to="/Contact">About Us</Link></div>
  </div>
  
</div>

<div className="col-4">
                  <div className="footer py-5">
  <div className="contact text-right"><Link to="/Contact">Social Media</Link></div>
  </div>
  
</div>


</div>
</div>
        </div>
    )
}

export default Footer
