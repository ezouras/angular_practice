import{ EventEmitter } from '@angular/core';
import {Ingredient} from './../shared/ingredient.model';
//you don't need a decorator class unless you plan
//to inject a service into a service.
import { Subject } from 'rxjs/Subject';


export class ShoppingService{


	//3. replace wtih an obervable instead:
	//public ingredientAddedEvent=new EventEmitter<Ingredient[]>();
	public ingredientAddedEvent=new Subject<Ingredient[]>(); //this Subject function will return an array of ingredients.
	public edittingStarted=new Subject<number>();

	private ingredients:Ingredient[]=[
	new Ingredient("steak seasoning per tabls",3),
	new Ingredient("steak seasoning per tabls",3),
	new Ingredient("steak seasoning per tabls",3),
	new Ingredient("steak seasoning per tabls",3)

	];

	public addIngredient(ingredient:Ingredient){
		this.ingredients.push(ingredient);
		/* 3/ replacing with rxjs subject. 
		 this.ingredientAddedEvent.emit(this.ingredients.slice());
		*/
		this.ingredientAddedEvent.next(this.ingredients.slice());
	}

	public getIngredients(){
		return this.ingredients.slice();
	}

	public addIngredients(ingredients: Ingredient[]){
		console.log('in shoppping service ',ingredients)
		this.ingredients.push(...ingredients);
		/* replacing wiht an rxjs subject instead. 
		this.ingredientAddedEvent.emit(this.ingredients.slice());
		*/
		this.ingredientAddedEvent.next(this.ingredients.slice());
	}

	public getIngredient(index:number){
		return this.ingredients[index];
	}

	public updateIngredient(index: number, newIngredient:Ingredient){
		this.ingredients[index]=newIngredient;
		this.ingredientAddedEvent.next(this.ingredients.slice());


	}
	public deleteIngredient(index:number){
		this.ingredients.splice(index,1);
		this.ingredientAddedEvent.next(this.ingredients.slice());
	}

}