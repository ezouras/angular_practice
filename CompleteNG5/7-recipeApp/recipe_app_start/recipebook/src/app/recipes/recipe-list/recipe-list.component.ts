import {Component, OnInit,OnDestroy} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import{Subscription} from 'rxjs/Subscription';

@Component({
	selector:"app-recipe-list",
	templateUrl:"./recipe-list.component.html"
})

export class RecipeListComponent implements OnInit,OnDestroy{

	recipes:Recipe[];
	subscription:Subscription;
/*
	1. moving recipe management to recipe server class. 
	@Output() recipeSelectedEventFromUpstream=new EventEmitter<Recipe>();

	@Output emitRecipeSelected=new EventEmitter<Recipe>();
	recipes is of type "array of recipes" . it is set 
	to an empty array. 
	
	recipes: Recipe[]=[
		new Recipe("vegan sausage","the best fake sausage","https://chefani.com/wp-content/uploads/2018/01/MG_7975.jpg"),
		new Recipe("marinara sauce","fresh and homemade","https://www.inspiredtaste.net/wp-content/uploads/2013/04/Homemade-Marinara-Sauce-Recipe-2-1200.jpg"),
		new Recipe("sweet potato bowls","hearty and healthy","https://minimalistbaker.com/wp-content/uploads/2015/04/AMAZING-Sweet-Potato-Chickpea-Buddha-Bowl-with-Kale-Red-Onion-and-a-STUNNING-Tahini-maple-sauce-vegan-glutenfree.jpg"),
		new Recipe("crabless cakes","crispy crumbly and delicious","https://veganhuggs.com/wp-content/uploads/2016/08/vegan-crab-cakes.png")
	];

	recipeSelected(recipe:Recipe){
		console.log("clicked and in RecipeListComponet ",recipe);
		this.recipeSelectedEventFromUpstream.emit(recipe);
	}

		the service now needs to be injected into the constructor 
		constructor(){}
	*/

	constructor(private recipeService: RecipeService, private router:Router, private activatedRoute:ActivatedRoute){
		//use private to instantly create a property
		//in the class that uses the same name. 
	}

	ngOnInit(){
		/*this.recipeService.recipesChanged.subscribe(
			(recipes:Recipe[])=>{
				this.recipes=recipes

			}
		)
		//assign this to a subscription so you can also destroy it
		*/
		this.subscription=this.recipeService.recipesChanged.subscribe(
			(recipes:Recipe[])=>{
				this.recipes=recipes

			}
		);

		this.recipes=this.recipeService.getRecipes();

	}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}

	onNewRecipe(){
		this.router.navigate(["new"],{relativeTo:this.activatedRoute});// this uses a RELATIVE route.  you can't do this unless you 
									// inform angular of the current route. 

	}


}