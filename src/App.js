import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import{BrowserRouter,Route,Switch} from 'react-router-dom'
import Cart from './components/Cart';
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



function App() {
  return (
    <>
    <BrowserRouter>
   

 <Navbar/>
 
<Switch>
<Route path="/" exact component={Home,MySlider}/>
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
 </Switch>
    
    
    </BrowserRouter>
    
    </>
  );
}



export default App;
