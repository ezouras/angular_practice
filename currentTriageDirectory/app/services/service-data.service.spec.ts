import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ServiceDataService } from './service-data.service';

describe('ServiceDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServiceDataService]
    });
  });

  it('should be created', inject([ServiceDataService], (service: ServiceDataService) => {
    expect(service).toBeTruthy();
  }));
});
