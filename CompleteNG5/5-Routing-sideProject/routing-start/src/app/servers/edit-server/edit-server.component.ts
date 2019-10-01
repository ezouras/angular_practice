import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Params} from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit=false;

  constructor(private serversService: ServersService,
              private currentRoute:ActivatedRoute) { }

  ngOnInit() {
    //from the actiated route, get the query arams and the
    //fragment
    //the following snapshot methods will not allow you to
    //react to the component after it has been loaded.
    console.log(this.currentRoute.snapshot.queryParams);
    console.log(this.currentRoute.snapshot.fragment);
    this.currentRoute.queryParams.subscribe((qParams:Params)=>{
      this.allowEdit=qParams["allowEdit"]==="1"? true:false;
    });
    //this.currentRoute.fragment.subscribe(()=>{});

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
