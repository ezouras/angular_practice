import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ServiceHealthService } from './service-health.service';

describe('ServiceHealthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServiceHealthService]
    });
  });

  it('should be created', inject([ServiceHealthService], (service: ServiceHealthService) => {
    expect(service).toBeTruthy();
  }));
});
