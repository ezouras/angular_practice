import {Component, Input} from '@angular/core';
import {Recipe} from '../../recipe.model'
//import {RecipeService} from '../../recipe.service'

@Component({
	selector:"app-recipe-item",
	templateUrl:"./recipe-item.component.html"
})

export class RecipeItemComponent{

	@Input() recipe: Recipe;
	//done thru property binding

	//2. this is done in order to enable routing. 
	//specifically, we want to ge the index in order to create a route:
	//so we are currently at /recipes. when this is loaded. we ant to add an "id" at /recipes/:id 
	// we will use this index to do so:
	@Input() index:number;


	//create a new event emitter that will pass a Recipe. 
	/* 1. moved the recipe management to a recipe service
	we are no longer using event emitters to go up the 
	chain of selectors

	this event "recipeWasSelectedEvent" was a (recipeWasSelectedEvent) 
	event bind in another compoennt in the app-recipe-item selector. 
	
	@Output() recipeWasSelectedEvent=new EventEmitter<Recipe>();

	*/

// 1. moved recipe management to  recipe serveice. it 
//needs to be injected into the constructor
	//2. not using the service to route via a click. using "routing" instead
	//constructor(private recipeService:RecipeService){}

//2. removing the need to send data thru a "click" - we will instead send it thru the route
/*	recipeSelected(recipeSelected:Recipe){

		/* 1. moving the recipe management to the 
		recipe service. 

		//when the user clicks, emit an event. send the recipe. 
		this.recipeWasSelectedEvent.emit(recipeSelected);
		*/ 
		
		/*this.recipeService.recipeSelectedEvent.emit(this.recipe);
		



	}
	*/

}