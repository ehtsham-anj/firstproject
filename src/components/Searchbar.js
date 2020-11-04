import React from 'react'
import{Form,FormControl,Button} from 'react-bootstrap'
import './Dropdown.css'

const Searchbar = () => {
    return (
        <div>
             <Form inline>
      <FormControl style={{width:500}} type="text" placeholder="Search" className="mr-sm-2" />
      <Button className="searchbtn" variant="outline-primary">Search</Button>
    </Form>
        </div>
    )
}

export default Searchbar
