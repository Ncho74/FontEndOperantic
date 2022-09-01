import { TestBed } from '@angular/core/testing';

import { ServiceCitationService } from './service-citation.service';

describe('ServiceCitationService', () => {
  let service: ServiceCitationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCitationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
