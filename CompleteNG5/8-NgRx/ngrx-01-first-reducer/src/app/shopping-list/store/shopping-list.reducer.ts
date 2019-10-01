import { Action } from '@ngrx/store';
//this imports an Action interface
//this interface is the type of "action"
//that is passed in the parameter below

import { Ingredient } from '../../shared/ingredient.model';
//import {ADD_INGREDIENT} from './shopping-list.action';
//typescript will know it is an array of type ingredients.
//belowin the switch statement we don't use an arbitrary
//string, we use the constant we just imported.

//in lieu of the imports we will add from shopping-list.action
import * as ShoppingListActions from './shopping-list.action';
const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
};

// this function receives two arguments.
//these arguments are being provided by the ngrx package.
// we can rely on the two arguments as shown.

//state = initial state gives the parameter a default value if none is
//included. the first time this runs it will get the default statue.
//after that, ngrx will provide the current state as a parameter.
export function shoppingListReducer(state = initialState, action: /*Action*/ShoppingListActions.AddIngredient)
{
  //Action is an interface imported from ngrx. this interface forces
  //type Actino to hacve a "type" property
  switch (action.type) { //in liu of switch you cold run a bunch of if's
    case ShoppingListActions.ADD_INGREDIENT://"getting" doesnt really change the state but
    //adding DOES. name could be anythign you want but convention
    //is to use all caps. you can't change the state. you return a
    //NEW state
      return { //returns new state.
        //you can not EDIT the previous sate. it's immutable
        ...state,// spread operator.  you are copy the
        //existing state object properties and adding them here.
        //OUR STATE IS REALLY only ingredients so you dont really need it.
        //but we add it because of best practices.
        ingredients: [...state.ingredients, action.payload]
        //ingredients property bein explicitly specified here
        //overwrites the ingredients property in the old state.
        //...state.ingredients is the spread operator
        //that takes the ingredients in the array and adds them
        //to this array.
        //I assume "action" is an ingredient?
      };
      //convention is always to copy old state (...state)
      //then overide the properties you want to change.
  }
}
