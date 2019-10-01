import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

	products:any = [];


  constructor(public rest:RestService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(){
  	this.getProducts();
  }

  getProducts(){
  	console.log("in get products method")
  	this.products = [];
  	this.rest.getProducts().subscribe((data:{})=>{
  		console.log(data);
  		this.products = data;
  	});
  }

  add(){
  	this.router.navigate(['/product-add'])
  }

  delete(id){
  	this.rest.deleteProduct(id)
  		.subscribe(
  			res=>{this.getProducts();},
  			err=>{console.log(err);}
  		)
  }

}
