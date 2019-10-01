import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const endpoint = "http://localhost:3000/api/v1/";
const httpOptions = { 
		headers: new HttpHeaders({
			"Content-Type":"application/json"
		})
}
export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response){
  	let body = res;
  	return body || {};
  }

  //these functions map the returned data witht he funcitn extract data.  
  //the only thing it does is return an empty object fi res does not exist. 

  getProducts():Observable<any>{
  	return this.http.get(endpoint + "products").pipe(map(this.extractData))
  }

  getProduct(id):Observable<any>{
  	return this.http.get(endpoint + "products/" +id).pipe(map(this.extractData))
  }

  addProduct(product):Observable<any>{
  	console.log(product);
  	return this.http.post<any>(endpoint + "products", JSON.stringify(product),httpOptions)
  		.pipe(tap((product)=>console.log(`added product w/ id=${product.id}`)),
  			   catchError(this.handleError<any>("addProduct"))
  			   );
  }

  updateProduct(id,product): Observable<any>{
  	return this.http.put(endpoint + 'products/' +id, JSON.stringify(product),httpOptions) 
  		.pipe(
  			tap(_=>console.log(`updated product id=${id}`)),
  			catchError(this.handleError<any>("updateProduct"))
  			)
  	}


  deleteProduct(id):Observable<any>{
  		return this.http.delete<any>(endpoint + "products/" +id, httpOptions)
  			.pipe(tap(_=>console.log(`deleted product id=${id}`)),
  				catchError(this.handleError<any>("deleteProduct"))
  				);
  	}

  private handleError<T>(operation = "operation", result?: T){
  	return(error:any):Observable<T>=>{
  		//TODO : send the error to remove logging infrastrocture
  		console.log(error);
  		console.log(`${operation} failed: ${error.message}`);
  		return of(result as T);
  	};
  };



}
