import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {UsersService} from './users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute,
              private us:UsersService) {

              }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {//when data is sent.
          this.id = +params['id'];
        },
      ()=>{//2nd function - executes when there is an error

      },
      ()=>{ //code that executes when complete - if complete
      }
    )};

    onActivate(){
      //pushing a data package.
      //clicking the button will push data. 
      this.us.userActivated.next(this.id);


    }
  }
