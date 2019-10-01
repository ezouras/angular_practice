import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { RestService } from './rest.service';


const appRoutes: Routes = [
	{
		path:'products',
		component:ProductComponent,
		data: { title: "Product list" }
	},
	{
		path:"product-data/:id",
		component:ProductDetailComponent,
		data: {title: "Product Details"}
	},
	{
		path:"product-add",
		component:ProductAddComponent,
		data:{title:"Product Add"}
	},
	{
		path:"product-edit/:id",
		component:ProductEditComponent,
		data:{title: "Product Edit"}
	},
	{
		path:"",
		redirectTo: "/products",
		pathMatch:'full'
	}

];



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  imports: [
  	RouterModule.forRoot(appRoutes),
  	FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
