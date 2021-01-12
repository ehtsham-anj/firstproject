import React,{Component} from 'react'
import MyDropdown from './Dropdown'
import './Dropdown.css'
import Searchbar from './Searchbar'
import {Link} from 'react-router-dom'
import MySlider from './Slider'
import AuthService from "../services/auth.service"



class Navbar extends Component{
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    
        this.state = {
          currentUser: undefined,
        };
      }
      componentDidMount() {
        const user = AuthService.getCurrentUser();
    
        if (user) {
          this.setState({
            currentUser: user,
            showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
            showAdminBoard: user.roles.includes("ROLE_ADMIN"),
          });
        }
      }
      logOut() {
        AuthService.logout();
      }
      render(){
        const { currentUser , showAdminBoard }=this.state;
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
            <div>
     {currentUser && (
       <li className="nav-item">
       <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
     )}
       </div>
     
     <div>
     {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}
     {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
     </div>
      ) : (
        <div >
         
        </div>
      )}
     </div>
     
   

            </div>
            
            
            
            </div>
    )
}

}
export default Navbar;