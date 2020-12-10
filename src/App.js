import React,{Component} from 'react'
import './App.css';
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
import AuthService from "./services/auth.service";

class App extends Component {
  constructor(props) {
    super(props);
  }
  logOut() {
    AuthService.logout();
  }
  render(){
  return (
    <>
    
    <Provider store={store}>
      
    <BrowserRouter>
    
   

 <Navbar/>
 
<Switch>
<Route path="/" exact component={Home,MySlider}/>
<Route exact path="/profile" component={Profile} />
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
    </>
  );
}
}



export default App;
