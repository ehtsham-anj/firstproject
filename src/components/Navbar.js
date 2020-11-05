import React from 'react'
import MyDropdown from './Dropdown'
import './Dropdown.css'
import Searchbar from './Searchbar'
import {Link} from 'react-router-dom'
import MySlider from './Slider'




const Navbar = () => {
    return (
        <div className="header">
        <div className="navbar">
            <div className="logo"><Link to="/"><img src="LOGO.png" alt="logo"/></Link></div>
            <div className="search">
            <Searchbar/>
            </div>
            <MyDropdown/>
            
            
            </div>
            <div>
                

            </div>
            
            
            
            </div>
    )
}

export default Navbar
