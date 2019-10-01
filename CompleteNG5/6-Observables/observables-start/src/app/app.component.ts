import { Component,OnInit } from '@angular/core';
import{UsersService} from './user/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user1Activated=false;
  user2Activated=false;

  constructor(private us:UsersService){

  }

  ngOnInit(){
    //you will get an id whenthe user pushes
    // a button on teh users page. the button is "activate".
    //it will add data to the links o this html page. 
    this.us.userActivated.subscribe((id:number)=>{
      if(id===1){
        this.user1Activated=true;
      } else if(id===2){
        this.user2Activated=true;
      }

  })
  }

}
