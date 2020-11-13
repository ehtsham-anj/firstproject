import {ADD_PRODUCT_CART} from './types';


export const addCart=(productName)=> {
    return (dispatch)=>{
        console.log("Added to Cart");
        console.log("Product:", productName);
    dispatch({
        type: ADD_PRODUCT_CART,
        payload : productName
    });
    }
}