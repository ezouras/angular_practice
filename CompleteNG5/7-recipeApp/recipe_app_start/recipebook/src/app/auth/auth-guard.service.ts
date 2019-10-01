import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
//can activate is an inteface that implements 
//the canactivate method
//injectable is a .. decorator.  
import {AuthService} from "./auth.service";
//the "other" service we are going to inject. 
@Injectable()//this allows us to inject other services 
//in this service. 

export class AuthGuardService implements CanActivate{
	

	constructor(private authService:AuthService){
	};

	canActivate(route:ActivatedRouteSnapshot,routerState:RouterStateSnapshot){
		return this.authService.isAuthenticated();

	}

}