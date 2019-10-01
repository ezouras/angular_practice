import {Subject} from "rxjs";

export class UsersService{
  //subject is both observer and observable at the same time.
  userActivated = new Subject();

}
