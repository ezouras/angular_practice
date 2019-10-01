import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
    You selected department with id = {{departmentId}}
    </h3>
    <div>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>

    </div>
    <router-outlet></router-outlet>
    <div>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
    </div>
    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    /*
    the above is the snapshot aproach. the problem with this is
    the route is updated, but the component never gets refreshed.
    because it's teh same component so ngOnInit is not run and
    id is never updated
    */
    //this.departmentId=id;

    this.route.paramMap.subscribe(params=>{
      let id=parseInt(params.get('id'));
      this.departmentId=id;

    });
  }
  goPrevious(){
    let previousId=this.departmentId-1;
    this.router.navigate(["/departments",previousId])
  }
  goNext(){
    let nextId=this.departmentId+1;
    this.router.navigate(["/departments",nextId])
  }
  gotoDepartments(){

    //if the department id is not set, set it to null
    let selectedId= this.departmentId ? this.departmentId:null;

    //the second object is nothing but key value pairs that
    //we want to send.  you will see when you click on "back"
    //the url is /departments;id=<whatever the id is>

    //instead of using the above, use relative paths.
    //here you are using the previous route. go back
    //one segment inthe URL. so if /department-list/1
    //the go back to department-list
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route});


  }
  showOverview(){
    this.router.navigate(["overview"],{relativeTo:this.route});

  }
  showContact(){
    this.router.navigate(["contact"],{relativeTo:this.route});

  }

}
