import React,{ Component } from 'react'
import './Dropdown.css'
import {  Button,Form,FormGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
import Payment from './Payment'
import UserService from '../service copy/UserService'


  

class Checkout extends Component {
  
  
  constructor(props) {

    

      super(props)
      
    this.state = {
      
        // step 2
        id: this.props.match.params.id,
        fullName:'',
        userName:'',
        emailAddress:'',
        password:'',
        address:'',
        phoneNo:''
    }
    this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
    this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
    this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
  }

  
  componentDidMount(){

    // step 4
    if(this.state.id === '_add'){
        return
    }else{
        UserService.getUserById(this.state.id).then( (res) =>{
            let user = res.data;
            this.setState({fullName: user.fullName,
                userName: user.userName,
                emailAddress : user.emailAddress,
                password:user.password,
                address:user.address,
                phoneNo:user.phoneNo
            });
        });
    }        
}
  saveOrUpdateUser = (e) => {
    e.preventDefault();
    let user = {fullName: this.state.fullName, userName: this.state.userName, emailAddress: this.state.emailAddress,
      password: this.state.password,address: this.state.address,phoneNo: this.state.phoneNo};
    console.log('user => ' + JSON.stringify(user));

    // step 5
    if(this.state.id ='_add'){
        UserService.createUser(user ).then(res =>{
            this.props.history.push('/login');
        });
    }else{
        UserService.updateUser(user, this.state.id).then( res => {
            this.props.history.push('/login');
        });
    }
}
changeUserNameHandler= (event) => {
  this.setState({userName: event.target.value});
}

changeFullNameHandler= (event) => {
  this.setState({fullName: event.target.value});
}

changeEmailAddressHandler= (event) => {
  this.setState({emailAddress: event.target.value});
}
changePasswordHandler= (event) => {
  this.setState({password: event.target.value});
}
changeAddressHandler= (event) => {
  this.setState({address: event.target.value});
}
changePhoneNoHandler= (event) => {
  this.setState({phoneNo: event.target.value});
}
    // const handleToken=(Token)=>{

    // }
    render(){
    return (
        <div className="checkoutContainer">
          <div >
              <div >
          
{/* <div>
    <Payment/>
</div> */}
{/* Sign in ends */}

{/* <div className="stripeSection  ">
    <StripeCheckout
    stripeKey="pk_test_51HmlhFKczKqS8F7t7um6dlIX8DKWWMOxTFYnb4qbyoTGooKESYSQFp1Ia7Sxs6tKnLDRexagIcOoViB7ifjts3Cr0014MCovqw"
    token={handleToken}
    billingAddress
    shippingAddress
    amout
    name="All products"

    >

    </StripeCheckout>
</div> */}

</div>





{/* Sign up start */}
<div >
<form className="signupform" style={{width:400, paddingLeft:60}} >
    <h1  className="text-danger text-center">REGISTRATION</h1>
  
    
                                        <div className = "form-group">
                                            <label> FullName: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.fullName} onChange={this.changeFullNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> UserName: </label>
                                            <input placeholder="UserName" name="lastName" className="form-control" 
                                                value={this.state.userName} onChange={this.changeUserNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> EmailAddress: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailAddress} onChange={this.changeEmailAddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address: </label>
                                            <input placeholder="Adress" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> PhoneNo: </label>
                                            <input placeholder="PhoneNo" name="password" className="form-control" 
                                                value={this.state.phoneNo} onChange={this.changePhoneNoHandler}/>
                                        </div>
                                       

                                   
 <Button  onClick={this.saveOrUpdateUser} className="btnpadreg mt-3" variant="primary" type="Sign Up">
    Sign Up
  </Button>
</form>
</div>
</div>

{/* Sign up end */}








        </div>

    )
}
}

export default Checkout
