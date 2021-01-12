import React,{Component} from 'react'
import './App.css';
import {Link } from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import{BrowserRouter,Route,Switch} from 'react-router-dom'
import Cart from './components/cart/Cart';
import Home from'./components/Home'
import Girlssection from'./components/pages/kidspages/Girlssection'
import Dresses from './components/pages/womenpages/Dresses'
import Jeans from './components/pages/menpages/Jeans'
import Shirts from './components/pages/menpages/Shirts'
import Shoes from './components/pages/menpages/Shoes'
import Pants from './components/pages/menpages/Pants'
import Snickers from './components/pages/menpages/Snickers'
import  Link2  from './components/pages/womenpages/Clothing'
import Babyboy from './components/pages/kidspages/Babyboy'
import Infants from './components/pages/kidspages/Infants'
import MySlider from './components/Slider'
import Blazers from './components/pages/womenpages/Blazers'
import Wjeans from './components/pages/womenpages/Wjeans'
import Contact from './components/Contact'
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import {Provider} from 'react-redux';
import store from './store';
import {connect} from 'react-redux';
import UserList from './components/UserList';
import Login from './components/Login'
import Profile from "./components/profile.component";

import BoardAdmin from './components/board-admin.component'

function App() {
  // constructor(props) {
  //   super(props);
  //   this.logOut = this.logOut.bind(this);

  //   this.state = {
  //     currentUser: undefined,
  //   };
  // }
  // componentDidMount() {
  //   const user = AuthService.getCurrentUser();

  //   if (user) {
  //     this.setState({
  //       currentUser: user,
  //       showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
  //       showAdminBoard: user.roles.includes("ROLE_ADMIN"),
  //     });
  //   }
  // }
  // logOut() {
  //   AuthService.logout();
  // }
  // render(){
  //   const { currentUser , showAdminBoard }=this.state;
  return (
    <div>
    
    
    <Provider store={store}>
      
    <BrowserRouter>
    {/* <nav className="navbar navbar-expand navbar-dark bg-dark"> */}
       {/* <div>
     {currentUser && (
       <li className="nav-item">
       <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
     )};
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
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/checkout"} className="nav-link">
              Sign Up
            </Link>
          </li>
        </div>
      )}
     </div>
     
     </nav> */}
   

 <Navbar/>
 
<Switch>
  
<Route path="/" exact component={Home,MySlider}/>
<Route exact path="/profile" component={Profile} />
<Route exact path="/admin" component={BoardAdmin} />
<Route path="/login" exact component={Login}/>
<Route path = "/users" component = {UserList}/>
<Route path="/payment" component={Payment}/>
<Route path="/checkout" component={Checkout}/>
<Route path="/womenjeans" component={Wjeans}/>
<Route path="/blazers" component={Blazers}/>
<Route path="/clothing" component={Link2}/>
<Route path="/Infants" component={Infants}/>
<Route path="/babyboys" exact component={Babyboy}/>
<Route path="/menSnickers" component={Snickers}/>
<Route path="/menPants" component={Pants}/>
<Route path="/menShoes" component={Shoes}/>
<Route path="/Shirts" component={Shirts}/>
  <Route path="/jeans" component={Jeans}/>
<Route path="/dresses" component={Dresses}/>
<Route path="/babygirls" component={Girlssection}/>
 <Route path="/cart" component={Cart}/>
 
 <Route path="/contact" exact component={Contact}/>
 </Switch>
    
    
    </BrowserRouter>
    </Provider>
    </div>
    
  );
}




export default App;
