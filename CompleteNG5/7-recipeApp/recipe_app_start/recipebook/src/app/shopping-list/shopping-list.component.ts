import {Component,EventEmitter,OnInit,OnDestroy} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingService} from './shopping.service';
import {Subscription} from 'rxjs/Subscription';

@Component({

	selector:'shopping-list-app',
	templateUrl:'./shopping-list.component.html'


})

export class ShoppingListComponent implements OnInit, OnDestroy{
	ingredients: Ingredient[];
	private subscription: Subscription;

/* 1. moving to shoping service compnent
	//ingredients is an array of ingredient objects.
	ingredients:Ingredient[]=[
	new Ingredient("steak seasoning per tabls",3),
	new Ingredient("steak seasoning per tabls",3),
	new Ingredient("steak seasoning per tabls",3),
	new Ingredient("steak seasoning per tabls",3)

	];
	*/

	constructor(private shoppingService: ShoppingService){
		
	}

	ngOnInit(){
		this.ingredients=this.shoppingService.getIngredients();
		this.subscription=this.shoppingService.ingredientAddedEvent.subscribe(
			(newIngredients: Ingredient[])=>{
				this.ingredients=newIngredients;

			}
		)

	}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}


	addNewIngredient(ingredient:Ingredient){
		console.log("added ingredient ",ingredient);
		//this.ingredients.push(ingredient);
		this.shoppingService.addIngredient(ingredient);
	}

	onEditItem(itemId:number){
		this.shoppingService.edittingStarted.next(itemId);

	}
	
}