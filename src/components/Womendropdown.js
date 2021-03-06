
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom'
import './Dropdown.css'

const Womendropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div>
               <div className="women">
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
   Women
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>All Items</DropdownItem>
        <Link to='/dresses'> <DropdownItem>Jewelry</DropdownItem></Link>
        <Link to='/blazers'><DropdownItem >Blazers</DropdownItem></Link>
        <Link to ="womenjeans"><DropdownItem> Pants</DropdownItem></Link>
        <Link to="/clothing"><DropdownItem> Tops</DropdownItem></Link>
      </DropdownMenu>
    </Dropdown>
    </div>
            
        </div>
    )
}

export default Womendropdown
