export enum HealthStatus {
  HEALTHY = "healthy",
  UNHEALTHY = "unhealthy"
}

export class Service {
  public custom_data: any;
  public datacenter: string;
  public environment: string;
  public hostname: string;
  public id: string;
  public recipe: string;
  public service_name: string;
  public start_time: number;
  public status: HealthStatus;

  constructor(
      custom_data: any,
      datacenter: string,
      environment: string,
      hostname: string,
      instance_id: string,
      recipe: string,
      service_name: string,
      start_time: number,
      status: HealthStatus
  ) {
    this.custom_data = custom_data;
    this.datacenter = datacenter;
    this.environment = environment;
    this.hostname = hostname;
    this.id = instance_id;
    this.recipe = recipe;
    this.service_name = service_name;
    this.start_time = start_time;
    this.status = status;
  }
}
