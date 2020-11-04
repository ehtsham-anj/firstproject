
import React, { useState } from 'react';
import './Dropdown.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom'

const Kidsdropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div>
               <div className="kids">
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
    Kids
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>All Items</DropdownItem>
        <Link to="/babygirls"><DropdownItem>Girls Section</DropdownItem></Link>
        <Link to="/babyboys"> <DropdownItem >boys Section</DropdownItem></Link>
        <Link to="/infants"><DropdownItem >Infant Section</DropdownItem></Link>
        
      </DropdownMenu>
    </Dropdown>
    </div>
            
        </div>
    )
}

export default Kidsdropdown
