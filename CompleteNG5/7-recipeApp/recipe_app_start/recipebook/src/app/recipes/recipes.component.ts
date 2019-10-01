import {Component,OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service'

@Component({
	selector:"app-recipes",
	templateUrl:"./recipes.component.html"
	//providers:[RecipeService] //all the components in "recipes" folder will share same instance of this service.
	//if you goto Augury, under the "appComponent" is the header and "RecipesCompoent" OR 
	//shoppinglist component. If you click on one feature, you remove the other component. 
	//therefore, when you go to the shopping list, you destroy this instance o the recipe service. 
	//and any new recipes will be gone. 
	//therefore, this needs to be added to "app module"
})


export class RecipesComponent implements OnInit{

	//3. replacing with observable
	//recipeSelected:Recipe;

	/*
	2. Logic is in the html
	recipeWasClicked(recipe:Recipe){
		this.recipeSelected=recipe;
		console.log("moved all the way up to recipes.component")
	}
	*/

	/* 1. moving service for recipes to recipe.service. 
	need to inject it into the constructor */
	
	//3/ replacing with observable so no longer need injected service
	/*constructor(private recipeService:RecipeService){

	}
	*/

	ngOnInit(){

		//because it's in the ngOnInit method, evertime 
		// the event is triggered, this component get 
		//updated and the html reflects the update 

		//3. replacing this with an observable
		/*
		this.recipeService.recipeSelectedEvent.subscribe(
			(recipe: Recipe)=>{
				//the data received by the emitter is  
				//"Recipe" 
				this.recipeSelected=recipe;
			}
		)
		*/
	}


}