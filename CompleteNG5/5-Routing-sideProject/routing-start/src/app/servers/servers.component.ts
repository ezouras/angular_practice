import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from "@angular/router";
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private currentRoute:ActivatedRoute) {
              }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  //onReload(){
    //this.router.navigate(["servers",],{relativeTo:this.currentRoute});
    ///this is relative path but yet it still works. why?
    //if you use a RouterLink in the html, it knows the route yoru on.
    // but this router does not knwo where you are at
    //we added the 2nd object, which says, load "servers" relativeTo:
    //and by default it is the "Root" domain.

  //}

}
