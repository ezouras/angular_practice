import {EventEmitter, Injectable} from '@angular/core';
import{Subject} from 'rxjs/Subject';
import {Recipe} from './recipe.model';
import {Ingredient} from './../shared/ingredient.model';
//you don't need a decorator class unless you plan
//to inject a service into a service.
import {ShoppingService} from './../shopping-list/shopping.service';

//where we manage our recipes. 

@Injectable() //we are injecting another service in this service. so we need this decorator!!
export class RecipeService{

//in this class, this.recipesChanged.next(pass an array of recipes)
//gets called. then, any other class that "injects" the recipe service
// in that classes "ngOnInit()" method can create a subscripition
//that subscribes to this Subject: classRecipeService.recipesChanged.subscribe(
//			(recipes:recipes array that is passed)=>{do something with data})
//goto the "recipe-list.component.ts" file in the ngOnInit to see it in action
	recipesChanged=new Subject<Recipe[]>();


//3. replacing event emitter with an obervable
// new event emitter will pass Recipe data
	//public recipeSelectedEvent= new EventEmitter<Recipe>();
//get the emitter
	
	/*public getRecipeSelectedEvent(){
		return this.recipeSelectedEvent;
	}
*/

/* private = don't access it directly */
	private recipes: Recipe[]=[
		new Recipe(
			"vegan sausage",
			"the best fake sausage",
			"https://chefani.com/wp-content/uploads/2018/01/MG_7975.jpg",
			[
			new Ingredient("vital wheat gluten by cups",3),
			new Ingredient("veggie broth by cups",1),
			new Ingredient("nutritional yeast flakes by cup",1)
			]),
		new Recipe(
			"marinara sauce",
			"fresh and homemade",
			"https://www.inspiredtaste.net/wp-content/uploads/2013/04/Homemade-Marinara-Sauce-Recipe-2-1200.jpg",
			[
			new Ingredient("vital wheat gluten by cups",3),
			new Ingredient("veggie broth by cups",1),
			new Ingredient("nutritional yeast flakes by cup",1)
			]),
		new Recipe(
			"sweet potato bowls",
			"hearty and healthy",
			"https://minimalistbaker.com/wp-content/uploads/2015/04/AMAZING-Sweet-Potato-Chickpea-Buddha-Bowl-with-Kale-Red-Onion-and-a-STUNNING-Tahini-maple-sauce-vegan-glutenfree.jpg",
			[
			new Ingredient("vital wheat gluten by cups",3),
			new Ingredient("veggie broth by cups",1),
			new Ingredient("nutritional yeast flakes by cup",1)
			]),
		new Recipe(
			"crabless cakes",
			"crispy crumbly and delicious",
			"https://veganhuggs.com/wp-content/uploads/2016/08/vegan-crab-cakes.png",
			[
			new Ingredient("vital wheat gluten by cups",3),
			new Ingredient("veggie broth by cups",1),
			new Ingredient("nutritional yeast flakes by cup",1)
			])
	];

	constructor(private shoppingService:ShoppingService){}

	setRecipes(recipes:Recipe[]){
		this.recipes=recipes;
		this.recipesChanged.next(this.recipes.slice());
	}

	public getRecipes(){
		//return this.recipes;
		//this returns a REFERENCE to the array. 
		//so if you chnage it somewhere else, it 
		//changes it here. which we don't want. how to fix?
		//add a slice method with no arguments. 
		//it returns a copy of the array 
		return this.recipes.slice();


	}

	getRecipe(id: number){

		return this.recipes[id];		

	}

	public addIngredientsToShoppingList(ingredients: Ingredient[]){
		this.shoppingService.addIngredients(ingredients);
	}

	addRecipe(recipe: Recipe){
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}

	updateRecipe(index:number, newRecipe:Recipe){
		this.recipes[index]=newRecipe;
		this.recipesChanged.next(this.recipes.slice());
	}

	deleteRecipe(index:number){
		this.recipes.splice(index,1);
		this.recipesChanged.next(this.recipes.slice());

	}

}