import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,Router, Params} from '@angular/router';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';


@Component({
	selector:"app-recipe-detail",
	templateUrl:"./recipe-detail.component.html"
})

export class RecipeDetailComponent implements OnInit{
	//component is only in view if there. 
	// is a recipe selected so this 
	// will always be set. 
	/*
	we will no longer receive it thru another component. 
	we will receive it thru the route
	@Input() recipe:Recipe;
	*/
	recipe:Recipe;
	id:number;


//2. we are passing data thru the route instead
//constructor(private recipesService:RecipeService){

	constructor(private recipesService:RecipeService,private route:ActivatedRoute, private router:Router){

	}

	ngOnInit(){
		/* why won't this work? 
		const id = this.route.snapshot.params['id'];// get the "id" from the route. 
		because it's a snapshot adn wont react to changes int he route.  
		we need to do somethign different everytimethe route changes.  
		*/
		this.route.params.subscribe(
			(params:Params)=>{
				/* why wont the item below work? it returns a string. 
				we have. 'number' type here.  how to cast it? 
				in typescript just add a + to typecast it
				this.id=params['id'];
				*/
				this.id=+params["id"];
				this.recipe=this.recipesService.getRecipe(this.id);

			}
		);

	}

	onEditRecipe(){
		//this.router.navigate(["edit"],{relativeTo:this.route})
		this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});


	}


	onAddToShoppingList(){
		console.log("ingredients are ",this.recipe.ingredients);
		this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
	}

	onDelete(){
		this.recipesService.deleteRecipe(this.id);
		this.router.navigate(['/recipes']);
	}


}