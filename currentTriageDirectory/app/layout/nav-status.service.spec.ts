import { TestBed, inject } from '@angular/core/testing';

import { NavStatusService } from './nav-status.service';

describe('NavStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavStatusService]
    });
  });

  it('should be created', inject([NavStatusService], (service: NavStatusService) => {
    expect(service).toBeTruthy();
  }));
});
