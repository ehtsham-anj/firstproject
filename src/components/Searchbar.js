import React from 'react'
import{Form,FormControl,Button} from 'react-bootstrap'
import './Dropdown.css'

const Searchbar = () => {
    
    return (
        <div className="searchcontainer">
             <Form inline className="searchform">
      <FormControl style={{width:500}} type="text" placeholder="Search" />
      <Button className="searchbtn" variant="outline-primary">Search</Button>
    </Form>
        </div>
    )
}

export default Searchbar
