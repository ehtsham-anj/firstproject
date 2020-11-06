import React from 'react'
import './Contact.css'

const Contact = ()=>{
    return(
        <>
        <div className="formcontact">
        <form className="form">
            <h1>Contact </h1>

        <label>Name</label>
        <input placeholder ="Customer Name"/>

        <label>Email</label>
        <input placeholder ="Customer Email"/>

        <label>Message</label>
        <textarea placeholder="Message"></textarea>     
        
        <button  type="submit">Submit</button> 
       
        </form>
        </div>
        </>
    )
}
export default Contact;