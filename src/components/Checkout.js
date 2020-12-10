import React,{ Component } from 'react'
import './Dropdown.css'
import AuthService from '../services/auth.service'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import {Button} from 'react-bootstrap'


const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const vemail = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};


const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};
// const vfullName = value => {
//   if (value.length < 6 || value.length >20) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The password must be between 6 and 20 characters.
//       </div>
//     );
//   }
// };
// const vaddress = value => {
//   if (value.length < 6 || value.length > 40) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The password must be between 6 and 40 characters.
//       </div>
//     );
//   }
// };
// const vphoneNo = value => {
//   if (value.length < 6|| value.length > 30) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The password must be between  and 30characters.
//       </div>
//     );
//   }
// };

class Checkout extends Component {
  
  
  constructor(props) {
    super(props);

    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangefullName = this.onChangefullName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeaddress = this.onChangeaddress.bind(this);
    this.onChangephoneNo = this.onChangephoneNo.bind(this);
      
    this.state = {
      
        // step 2
        fullName:'',
        userName:'',
        email:'',
        password:'',
        address:'',
        phoneNo:'',
        successful: false,
        message: ""
    }
  
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangefullName(e) {
    this.setState({
      fullName: e.target.value
    });
  }

  onChangeaddress(e) {
    this.setState({
      address: e.target.value
    });
  }

  onChangephoneNo(e) {
    this.setState({
      phoneNo: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();
    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.fullName,
        this.state.address,
        this.state.phoneNo
        ).then(
          response => {
            this.setState({
              message: response.data.message,
              successful: true
            });
          },
          error => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
  
            this.setState({
              successful: false,
              message: resMessage
            });
          }
        );
      }
    }



    
    render(){
    return (
        
          
              <div className="checkoutContainer" >

<div >
<h1  className="text-danger text-center mt-5 mb-3">REGISTRATION</h1>
<Form 
 onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
       className="signupform" style={{width:400, paddingLeft:60}} >
  
    {!this.state.successful && ( 
      <div>                             
        <div className = "form-group">
        <label> FullName: </label>
         <Input placeholder="First Name" name="firstName" className="form-control" 
        value={this.state.fullName}
        onChange={this.onChangefullName}
        // validations={[required, vfullName]}
        />
         </div>
        <div className = "form-group">
        <label > UserName: </label>
           <Input placeholder="UserName" name="lastName" className="form-control" 
                       value={this.state.username}
                       onChange={this.onChangeUsername}
                       validations={[required, vusername]}/>
       </div>
  <div className = "form-group">
          <label> EmailAddress: </label>
       <Input placeholder="Email Address" name="emailId" className="form-control" 
         value={this.state.email}
         onChange={this.onChangeEmail}
         validations={[required, vemail]}/>
       </div>
          <div className = "form-group">
     <label> Password: </label>
        <Input placeholder="Password" name="password" className="form-control" 
            value={this.state.password}
            onChange={this.onChangePassword}
            validations={[required, vpassword]}/>
      </div>
     <div className = "form-group">
  <label> Address: </label>
      <Input placeholder="Adress" name="address" className="form-control" 
        value={this.state.address}
        onChange={this.onChangeaddress}
        // validations={[required, vaddress]}
        />
         </div>
         <div className = "form-group">
         <label> PhoneNo: </label>
        <Input placeholder="PhoneNo" name="password" className="form-control" 
      value={this.state.phoneNo}
      onChange={this.onChangephoneNo}
      // validations={[required, vphoneNo]}
      />
                  </div>
                                       

                                       <div className="form-group">                                
 <Button   className="btnpadreg mt-3" variant="primary" type="Sign Up">
    Sign Up
  </Button>
  </div>
  </div>
    
    )}
 {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
            </Form>
</div>
</div>





    );
}
}

export default Checkout
