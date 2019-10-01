import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

import { ServiceDataService } from '../service-data.service';

type CardFilterParams = {[param: string]: Array<string>};


@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.less']
})
export class CardViewComponent implements OnInit {
  public faWindowClose = faWindowClose;
  public message: string = "Loading...";
  public model: any;
  public searchParams: CardFilterParams = {};

  private filters = {
    status: "Status",
    datacenter: "Datacenter",
    service_name: "Service",
    environment: "Environment"
  };


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ServiceDataService
  ) {}

  excludeFilter(filterKey: string, excludedValue: string) {
    let newParams = {...this.searchParams};
    newParams[filterKey] = newParams[filterKey].filter(
        (filterValue) => {return filterValue !== excludedValue; }
    )
    if (newParams[filterKey].length === 0) {
      delete newParams[filterKey];
    }

    return newParams;
  }

  itemSelected(event, input) {
    event.preventDefault();
    let {type: filterType, name: filterValue} = event.item;
    if(!this.searchParams[filterType]) {
      this.searchParams[filterType] = [];
    }
    this.searchParams[filterType].push(filterValue);
    this.router.navigate(["/services/list"], {queryParams: this.searchParams});
  }

  filterSearch = (searchText$: Observable<string>) => searchText$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => (
        this.service.getFilterOptions().filter(v => v.name.indexOf(term) > -1)
      ))
  );

  formatter = (x: {name: string}) => x.name;

  get results() {
    return this.service.getServices(this.searchParams);
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(
      (params: ParamMap) => {
        this.searchParams = {};

        for (let key of Object.keys(this.filters)) {
          let paramList = params.getAll(key);
          if(paramList.length > 0) {
            this.searchParams[key] = paramList;
          }
        }
        if(this.results.length <= 0) {
          this.message = "There is no data to display."
        }

      }
    );
  }

}
