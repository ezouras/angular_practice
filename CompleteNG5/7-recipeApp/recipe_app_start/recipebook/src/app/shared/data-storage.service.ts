import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { map } from "rxjs/operators";


import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import{AuthService} from '../auth/auth.service';

@Injectable() //this service is receiving another service 
//also be sure in app.module you import (in "imports") the http module. 
export class DataStorageService{
	constructor(private http:Http, 
				private recipeService:RecipeService,
				private authService:AuthService){

	}

	storeRecipes(){
		//the database is: https://ng-recipe-book-bf695.firebaseio.com/
		//and the recipes.json is the end point for that database
		//what gets returned when you "put" is an observable.  you 
		//should receive this observable. you "could" receive it here
		//but we will receive it in the component so that if there is 
		//an error we can handle the error in the component. 

		const token=this.authService.getToken();
		/* adding a token to the param 
		return this.http.put('https://ng-recipe-book-bf695.firebaseio.com/recipes.json',
				this.recipeService.getRecipes()); //put just overrides what is already in firebase database.
				*/
		return this.http.put('https://ng-recipe-book-bf695.firebaseio.com/recipes.json?auth=' +token,
				this.recipeService.getRecipes());
	}

	//in order to use this, you need to add it to the "app.module.ts"
	//in  "providers" array in exports

	fetchRecipes(){
		/* re-doing this function because if we "put"
				a recipe on firebase without "ingrendients" it doesn't create 
				an empty ingredient array, it simply just doesn't add the key. 
				we want to ensure that the data mimics the recipe.model which includes. 
				the ingredients array - empty if there are no ingredients , but 
				presnt none the less 

		this.http.get("https://ng-recipe-book-bf695.firebaseio.com/recipes.json")
			.subscribe(
				(response:Response)=>{
					//const recipes=response.json();
					const recipes: Recipe[] = response.json();
					this.recipeService.setRecipes(recipes);

				}
			);

			*/

//we need to get a token first to know that we have permission 
//to GET recipes.    get Token returns a promise. 

		//this.authService.getToken().then((token:String)=>{})//it's asyncronouse, so it will
			//when it's ready.  the "get" will probably 
			//fire first and you don't have the token. 
			//so you need the "get" request IN here to fire
			//after. you get the token. but you cant' do this either. 
			//why? becuase you have an observable inside of a callback. 
			//it's subscribed.  so.. what do you do? 

		const token=this.authService.getToken();
		//this.http.get("https://ng-recipe-book-bf695.firebaseio.com/recipes.json)
		//adding authentification
		this.http.get("https://ng-recipe-book-bf695.firebaseio.com/recipes.json?auth=" +token)
			.pipe(map((response:Response)=>{
					const recipes: Recipe[] = response.json();//get data 
					for(let recipe of recipes){
						//check to see if it has ingredients - whether it is empty or not. 
						if(!recipe['ingredients']){
							console.log("this recipe has no ingredients ",recipe)
							recipe['ingredients']=[]
						}
					}
					return recipes;
				}
			))
			.subscribe(
				(recipes:Recipe[])=>{
					this.recipeService.setRecipes(recipes);

				}
			);


	}

}