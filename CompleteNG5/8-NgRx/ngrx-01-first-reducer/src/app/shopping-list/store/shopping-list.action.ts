import {Action} from "@ngrx/store";
import {Ingredient} from "../../shared/ingredient.model";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
//we export constants so that we don't botch up
//the spelling.  and it remains the same always.

export class AddIngredient implements Action {
  //becauise we are implementing the Action
  //interface, it forces us to structure this
  //class a specific way.

  //first, we need a type. this type identifies the
  //action
  readonly type = ADD_INGREDIENT;
  //readonly is a type script feature.

  //payload is a name YOU choose. unlike "type"
  payload: Ingredient;
}
