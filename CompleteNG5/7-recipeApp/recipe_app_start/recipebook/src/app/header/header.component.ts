import {Component} from "@angular/core";
import {Response} from "@angular/http";
import {DataStorageService} from "../shared/data-storage.service";
import {AuthService} from "../auth/auth.service";
@Component({
	selector:'app-header',
	templateUrl:'./header.component.html'
}
)

export class HeaderComponent{
	//@Output() allows components outside of this one to access the 
	//fetureSelected property.  

	//@Output() featureSelected=new EventEmitter<string>();
	
	//featureSelected:EventEmitter<string>=new EventEmitter();
	//a new eventemiter instance that will pass back a string. 
	//feature selected 

	//featureSelected is AN EVENT.  someone outside of this html 
	// will bind to the event by (featureSelected)=wheatevermethodinTHEIRhtml($event)

	/*onSelect(feature:string){
		//from this html piece, when you click on somethign (click) on 
		///html - event binding.  then emit the string. 
		this.featureSelected.emit(feature);

	}
	*/
	authService:AuthService;


	//note that if you add "private" in front of the dataStorageService value, 
	// it gets created for you. but DataStorageService does not have "private"
	// in front of it , so , you have to assign it. 
	constructor(private dataStorageService:DataStorageService,authService:AuthService){
		this.authService=authService;

	}

	onSaveData(){
		//why subscribe ont he component instead of the service?
		//becaues you may get an error (we don't handle them here)
		//but you could and you want to handle the error
		this.dataStorageService.storeRecipes().subscribe(
			(response:Response)=>{
				console.log(response);
			}

			)


	}

	onFetchData(){
		this.dataStorageService.fetchRecipes();
	}

	onLogout(){
		this.authService.logout();
	}

}