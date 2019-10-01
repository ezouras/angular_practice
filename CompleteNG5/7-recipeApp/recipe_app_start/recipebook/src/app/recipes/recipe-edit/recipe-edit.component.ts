import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params,Router} from '@angular/router'
import {FormGroup,FormControl, FormArray, Validators} from '@angular/forms';
import{RecipeService} from './../recipe.service';
import {Recipe} from './../recipe.model';

@Component({
	selector:"app-recipe-edit",
	templateUrl:"./recipe-edit.component.html",
  	styleUrls: ['./recipe-edit.component.css']
})

export class RecipeEditComponent implements OnInit{
	id:number;

	//are you editing a recipe? or are you creating a new recipe?
	// if you are not in edit mode, you are creatin a new recipe.addIngredient. 
	//that is the default. 

	editMode:boolean=false;
	recipeForm:FormGroup;


	constructor(private activatedRoute: ActivatedRoute, 
				private recipeService:RecipeService,
				private router:Router)
	{}

	ngOnInit(){
		//this gets called when the route changes. 
		this.activatedRoute.params.subscribe(
			(params: Params)=>{
				//path:"new" or /recipes/new -> creating new recipe.  
				//path: recipes/:id/edit  --> editing the recipe with id :id.  
				this.id=+params['id'];  //add + to cast into number.   
				console.log(this.id);
				//this.editMode=this.id != NaN;
				this.editMode=params['id']!=null;
				console.log("edit mode is: ",this.editMode)

				//reset form when route changes
				this.initForm();


			});

	}

	private initForm(){
		let recipeName = "";
		let recipeImagePath="";
		let recipeDescription="";
		//is initialized with an empty array. 
		let recipeIngredients = new FormArray([]);


		if(this.editMode){
			const recipe=this.recipeService.getRecipe(this.id);
			recipeName=recipe.name;
			recipeImagePath=recipe.imagePath;
			recipeDescription=recipeDescription;
			if(recipe['ingredients']){
				for(let ingredient of recipe.ingredients){
					recipeIngredients.push(
						new FormGroup({
							"name":new FormControl(ingredient.name, Validators.required),
							"amount":new FormControl(ingredient.amount,[
								Validators.required,
								Validators.pattern(/^[1-9]+[0-9]*$/)
								])
							})
						)
				}
			}
		}

		this.recipeForm=new FormGroup({
			"name": new FormControl(recipeName, Validators.required),
			"image":new FormControl(recipeImagePath, Validators.required),
			"description":new FormControl(recipeDescription, Validators.required),
			"ingredients":recipeIngredients
		})

	}

	onSubmit(){
		/*const newRecipe=new Recipe(
				this.recipeForm.value['name'],
				this.recipeForm.value['amount'],
				this.recipeForm.value['image'],
				this.recipeForm.value['ingredients']
				)
		if(this.editMode){
			this.recipeService.updateRecipe(this.id,newRecipe);
			*/
		if(this.editMode){
			this.recipeService.updateRecipe(this.id,this.recipeForm.value);
		}
		else{
			this.recipeService.addRecipe(this.recipeForm.value);
		}
	}

	getControls(){
  		return (<FormArray>this.recipeForm.get('ingredients')).controls;
	}

	onAddIngredient(){
		// what is returned from this method is a "FormArray" type. 
		(<FormArray>this.recipeForm.get("ingredients")).push(
			new FormGroup({
				"name":new FormControl(null,Validators.required),
				"amount":new FormControl(null,[
								Validators.required,
								Validators.pattern(/^[1-9]+[0-9]*$/)
								])
			})
			);
	}

	onCancel(){
		this.router.navigate(['../'],{relativeTo:this.activatedRoute})
	}

	onDeleteIngredient(index:number){
		(<FormArray>this.recipeForm.get("ingredients")).removeAt(index);

	}

}