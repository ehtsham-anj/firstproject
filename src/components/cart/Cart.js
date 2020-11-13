
import React, { Fragment } from 'react'
import{ connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {productQuantity,clearProduct} from '..//../actions/productQuantity'


/* I am importing all the images here */
import babyBodysuit from './Cart Images/Image1.png'
import toddlerTracksuit from './Cart Images/Image2.png'
import babyFullzip from './Cart Images/Image3.png'
import toddlerHoodie from './Cart Images/Image4.png'
import toddlerCrew from './Cart Images/Image5.png'
import kidsYellow from './Cart Images/Image6.png'
import toddlerTop from './Cart Images/Image7.png'
import toddlerGripper from './Cart Images/Image8.png'
import babyHat from './Cart Images/Image9.png'
import babyToddlershoe1 from './Cart Images/Image10.png'
import babyToddlerslide from './Cart Images/Image11.png'
import babyToddlershoe2 from './Cart Images/Image12.png'







function Cart ({cartProps, productQuantity,clearProduct})  {
	console.log(cartProps);


	let productsInCart=[];
	Object.keys (cartProps.products).forEach(function(item) {
		console.log(item);
		console.log(cartProps.products[item].inCart);

		if (cartProps.products[item].inCart) {
      productsInCart.push (cartProps.products[item])
		}
		console.log(productsInCart);
	});




const productImages = [babyBodysuit,toddlerTracksuit,babyFullzip,toddlerHoodie,toddlerCrew,kidsYellow,toddlerTop,toddlerGripper,babyHat,babyToddlershoe1,babyToddlerslide,babyToddlershoe2]


	productsInCart = productsInCart.map((product, index) =>{
		return(
			<Fragment key={index} >
    <div className="product"> <ion-icon onClick={() => clearProduct(product.tagName)} name="close-circle"></ion-icon> <img src={productImages[index]} />
	<span className="sm-hide"> {product.name} </span>
	</div>
	<div className="price sm-hide"> ${product.price},00 </div>

	<div className="quantity">
	 <ion-icon onClick={()=> productQuantity('decrease', product.tagName)}  className="decrease" name="arrow-back-circle-outline"></ion-icon>
	<span>{product.numbers}</span>
	<ion-icon onClick={()=> productQuantity('increase', product.tagName)} className="increase" name="arrow-forward-circle-outline"> </ion-icon>
	</div>
	
	<div className="total">  $ {product.numbers*product.price},00</div>

			</Fragment>
		)
	})



	

	return (
		
<div className="container-products">

<div className="product-header">
	<h4 className="product-title"> Items </h4>
	<h4 className=" price sm-hide"> Price</h4>
	<h4 className="quantity"> Quantity </h4>
	<h4 className="total"> Total </h4>
</div>
<div className="products">
	{productsInCart}
</div>
<div className="cartTotalContainer">
	<h4 className="cartTotalTitle"> Total Price</h4>
	<h4 className="cartTotal"> $ { cartProps.cartCost},00</h4>
</div>
<div className="checkout"> 
<Link to="/checkout"><button type="button" class="btn btn-primary btn-lg">Proceed To Checkout</button></Link>

</div>


</div>		

    )
}




const mapStateToProps=state=> ({
	cartProps:state.cartState
});
export default connect(mapStateToProps , {productQuantity,clearProduct} ) (Cart);


