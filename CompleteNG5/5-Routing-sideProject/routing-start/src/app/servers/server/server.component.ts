import { Component, OnInit,OnDestroy } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import { ServersService } from '../servers.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  //serverId:number=1;
  paramsSubscription:Subscription;
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private currentRoute:ActivatedRoute,
              private routeTo:Router) { }

  ngOnInit() {
    //istead of using "1", get the data that is
    //passed to the URL.
    //adding the "+" coverts ths string to a number
    const id=+this.currentRoute.snapshot.params["id"];
    this.server = this.serversService.getServer(id);


    this.paramsSubscription=this.currentRoute.params
      .subscribe((updatedP:Params)=>{
        this.server = this.serversService.getServer(+updatedP['id']);
      });
    }
    ngOnDestroy(){
      this.paramsSubscription.unsubscribe;
    }

    onEdit(){
      //console.log("clicked on edit button!");
        //const sId=+this.currentRoute.snapshot.params.id;

        //console.log(sId);
      //  console.log("clicking button");
      this.routeTo.navigate(["edit"],{relativeTo:this.currentRoute,preserveQueryParams:true});
    }
  }
