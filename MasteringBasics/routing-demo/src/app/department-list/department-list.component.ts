import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
      <!-- if isSelected is true, apply the selected class(see stylesheet) to that link-->
        <span class="badge">{{department.id}}</span>{{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId;

  departments = [
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"MongoDB"},
    {"id":4,"name":"Ruby"},
    {"id":5,"name":"Bootstrap"}

  ]

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    //retrieve the id from the "back" button on the departmet details.
    //using an observable.
    this.route.paramMap.subscribe((params:ParamMap)=>{
    //get the id
    this.selectedId = parseInt(params.get("id"));


  });
  }

  onSelect(department){

    // /departments/id
    //corresponds to the route:   path: 'departments/:id',
    //this.router.navigate(['/departments',department.id]);

    //use relative navigation instead of the above:
    this.router.navigate([department.id],{relativeTo:this.route});
    //this.route = doesn't matter what the current
    //route is, simply append department.id to whatever i tis. 

  }
  isSelected(department){
    return department.id ===this.selectedId;

  }

}
