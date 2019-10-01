import { Component,OnInit } from '@angular/core';
import {environment } from ./environments.environment;
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  loadedFeature:string='recipes';

  onNavigate(featureSelected:string){
  	this.loadedFeature=featureSelected;
  	console.log("clicked and feature is ",this.loadedFeature)

  }

  constructor(){
    console.log("the configuration for this execution is ",enviornment.production)
  }
  ngOnInit(){
  	firebase.initializeApp({
  		  apiKey: "AIzaSyAO1HSyRn2jcXpWoLN2rwdkzxGVi52Ghfo",
    		authDomain: "ng-recipe-book-bf695.firebaseapp.com"
  	});

  }
}
