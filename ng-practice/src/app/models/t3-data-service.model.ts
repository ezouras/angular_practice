export class T3DataService {
  public id: string;
  public service_name: string;
  public status:string;


  constructor(
      id: string,
      service_name: string,
      status:string
  ) {

    this.id = id;
    this.service_name = service_name;
    this.status=status;
  }
}
