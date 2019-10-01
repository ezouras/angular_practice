import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

/*const appRoutes: Routes = [
  {path: "", component:HomeComponent }, // the actua path - localhost:4200/users
  {path: "users", component:UsersComponent },
  {path: "users/:id", component:UserComponent },//we need to add /userId afer /users/userId
  //the colon makes it a property where :id is replaced by an id so users/1 or /users/2
  {path: "users/:id/:name", component:UserComponent },
  {path: "servers", component:ServersComponent },
  {path: "servers/:id", component:ServerComponent },
  {path: "servers/:id/edit", component:EditServerComponent}
]
*/
//instead of havig multiple "users" and multiple "servers" routes,
//have one "users" and one "servers" then use child routes.
const appRoutes: Routes = [
  {path: "", component:HomeComponent }, // the actua path - localhost:4200/users
  {path: "users", component:UsersComponent,
    children:[
    {path: ":id", component:UserComponent },
    {path: ":id/:name", component:UserComponent}
    ]},
  {path: "servers", component:ServersComponent,
    children:[
      {path: ":id", component:ServerComponent },//servers is autmatically prepended.
      {path: ":id/edit", component:EditServerComponent}//dont' forget to load the outlet in the servers comonent.
    ]
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
