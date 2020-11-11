import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu,Button, DropdownItem, CardText } from 'reactstrap';
import './Dropdown.css'
import{Link} from 'react-router-dom'
import Kidsdropdown from './Kidsdropdown'
import Womendropdown from './Womendropdown'
import ModalRegister from './ModalRegister'
import ModalSignIn from './ModalSignIn'
import Cartbtn from './Cartbtn'

const MyDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  

  return (
      <>
      <div className="dropdown">
        <div className="shopsections">
      <div className="men">
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
    Men
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>All Items</DropdownItem>
        <Link to="Jeans"><DropdownItem>Jeans</DropdownItem></Link>
        <Link to ="shirts"><DropdownItem >Shirts</DropdownItem></Link>
        <Link to="menshoes"><DropdownItem >Shoes</DropdownItem></Link>
        <Link to="menpants"><DropdownItem> pants</DropdownItem></Link>
        <Link to="mensnickers"><DropdownItem>Snickers</DropdownItem></Link>
      </DropdownMenu>
    </Dropdown>
    </div>
   
    <div><Womendropdown/></div>
 <div><Kidsdropdown/></div>
 </div>
 <div className="formsection">
<div><ModalRegister/></div>
<div> <ModalSignIn/></div>
<div><Cartbtn/></div>
    </div>
    </div>
    </>
  );
}

export default MyDropdown;