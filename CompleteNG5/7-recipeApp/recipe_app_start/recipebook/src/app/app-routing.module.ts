import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipesStartComponent} from './recipes/recipes-start/recipes-start.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuardService} from './auth/auth-guard.service';

const appRoutes =[ //an array of objects. 
	//{path: '', redirecTo:'/recipes'},//this path is a part of EVERY path.  it will always default here so there is an error when you run this. 
	{
		path: '', 
		redirectTo:'/recipes',
		pathMatch:"full"
	},
	{
		path: 'recipes', 
		component:RecipesComponent,
		children:[
			{path:"",
			component:RecipesStartComponent
			}, //in the recipesComponent is where you need a <router-outlet>to show the children

			// the "new" path NEEDS to be BEFORe the :id.  how does angular know that 
			//"new" is not an id? it doens't.  it first take watever is after /recipes/ 
			//and set it to "id".  but if you flip it, it will see for hardcoded "new" first. 
			//and if it doens't find it, it will load :id 

			{
				path:"new", //  /recipes/new/ will be the route. 
 				component:RecipeEditComponent,
 				canActivate:[AuthGuardService] //in the compoent, read the id. get the right recipe. 
				//this is dependent on the thing you click.  you click on the "recipe-item"
			},

			{
				path:":id",
				component:RecipeDetailComponent //in the compoent, read the id. get the right recipe. 
				//this is dependent on the thing you click.  you click on the "recipe-item"
			},

			{
				path:":id/edit", //  /recipes/new/ will be the route. 
 				component:RecipeEditComponent,
 				canActivate:[AuthGuardService] //in the compoent, read the id. get the right recipe. 
				//this is dependent on the thing you click.  you click on the "recipe-item"
			}
		]
	},
	{path: 'shopping-list', component:ShoppingListComponent},
	{path: 'signup', component:SignupComponent},
	{path: 'signin', component:SigninComponent}
];


@NgModule({
	imports:[RouterModule.forRoot(appRoutes)],
	exports:[RouterModule]
})

export class AppRoutingModule{

}