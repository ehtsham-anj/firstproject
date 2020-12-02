/* after created this reducer we will import it to index here. */

import {ADD_PRODUCT_CART , GET_NUMBERS_CART,INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT} from '../actions/types';


const initialState = {
    cartNumbers:0,
    cartCost:0,

    products: { 
        babyBodysuit: {
            name : "Baby Bodysuit",
            tagName: 'babyBodysuit',
            price: 22.00,
            numbers:0,
            inCart:false,
        },
        toddlerTracksuit: {
            name : "Toddler Tracksuit",
            tagName: 'toddlerTracksuit',
            price: 48.00,
            numbers:0,
            inCart:false,
        },

        babyFullzip: {
            name: "Baby (0-9M) Full-Zip Coverall Nike Swoosh ",
            tagName: 'babyFullzip',
            price: 45.00,
            numbers:0,
            inCart:false,
        },
        toddlerHoodie: {
            name: "Toddler Hoodie and Pants Set Nike Sportswear Tech Fleece  ",
            tagName: 'toddlerHoodie',
            price: 95.00,
            numbers:0,
            inCart:false,
        },
        toddlerCrew: {
            name: "Toddler Crew Nike Air   ",
            tagName: 'toddlerCrew',
            price: 77.00,
            numbers:0,
            inCart:false,
        },
        kidsYellow: {
            tagName: 'kidsYellow',
            price: 68.00,
            numbers:0,
            inCart:false,
        },
        toddlerTop: {
            name: " Toddler Top and Leggings Set Nike  ",
            tagName: 'toddlerTop',
            price: 44.55,
            numbers:0,
            inCart:false,
        },
        toddlerGripper: {
            name: " Toddler Gripper Ankle Socks (3 Pairs) Nike   ",
            tagName: 'toddlerGripper',
            price: 12.00,
            numbers:0,
            inCart:false,
        },
        babyHat: {
            name: " Baby (0-6M) Hat and Booties Box Set Nike   ",
            tagName: 'babyHat',
            price: 15.00,
            numbers:0,
            inCart:false,
        },
        babyToddlershoe1: {
            name: " Baby/Toddler Shoe Nike    ",
            tagName: 'babyToddlershoe1',
            price: 50.00,
            numbers:0,
            inCart:false,
        },
        babyToddlerslide: {
            name: " Baby/Toddler Slide Nike Kawa   ",
            tagName: 'babyToddlerslide',
            price: 24.55,
            numbers:0,
            inCart:false,
        },
        babyToddlershoe2: {
            name: " Baby/Toddler Shoe Nike Pico 5    ",
            tagName: 'babyToddlershoe2',
            price: 35.55,
            numbers:0,
            inCart:false,
        },
        menshoe1: {
            name: " Men/Snicker    ",
            tagName: 'menshoe1',
            price: 150.00,
            numbers:0,
            inCart:false,
            images:'/images/s3.jpg',
            
        },
       
        
}

}
export default (state=initialState, action)=> {
    let productSelected="";
    switch (action.type){
        case ADD_PRODUCT_CART:
            productSelected={...state.products[action.payload]} 
            
            productSelected.numbers+=1;
            productSelected.inCart=true;
            console.log(productSelected);

            return {
                ...state,
                cartNumbers:state.cartNumbers +1,
                cartCost: state.cartCost+state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]:productSelected,
                }
            }


   case GET_NUMBERS_CART :
       return {
           ...state
       }

       case INCREASE_QUANTITY :
           productSelected={...state.products[action.payload]}; 
           productSelected.numbers +=1;
       return {
           ...state,
           cartCost:state.cartCost + state.products[action.payload].price,

           products: {
               ...state.products,
               [action.payload]:productSelected
           }
       }


       case DECREASE_QUANTITY :
       return {
           ...state
       }


       case CLEAR_PRODUCT :
        productSelected={...state.products[action.payload]}; 
        let numbersBackup=productSelected.numbers;
        productSelected.numbers=0 ;
        productSelected.inCart=false;

return { 
    ...state,
    cartCost:state.cartCost - (numbersBackup*productSelected.price),

    products: {
        ...state.products,
        [action.payload]:productSelected
    }

}

        default:
            return state;
    }
}