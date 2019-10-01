import * as firebase from 'firebase';
import {Router} from "@angular/router";
import{Injectable} from "@angular/core";

@Injectable()
//injectable was added because we are injecting 
//the router service IN A SERVICE
export class AuthService{

	token:String;

	constructor(private router:Router){
		//adding this in order to reroute 
		//depending on action below
	}

	signupUser(email:string,password:string){
		firebase.auth().createUserWithEmailAndPassword(email,password)
			.catch(error=> console.log(error))
		}

	signinUser(email:string, password:string){
		firebase.auth().signInWithEmailAndPassword(email,password)
		.then(response=>{
			//at this point user is signed in 
			//redirect to another place. 
			this.router.navigate(['/']);//goto root page. 
			console.log(response);
			firebase.auth().currentUser.getIdToken(false)
			.then((token:string)=>this.token=token);
		})
		.catch(
			error=>console.log(error)
		)
	}

	getToken(){
		firebase.auth().currentUser.getIdToken(false)
			.then((token:string)=>this.token=token);
		return this.token;
	}

	isAuthenticated(){
		return this.token!=null; //if this token is not null, will return true. 
		//if token = null, will return false. 

	}

	logout(){
		firebase.auth().signOut();
		this.token=null;
	}

}

