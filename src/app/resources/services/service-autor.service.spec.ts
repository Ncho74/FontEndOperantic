import { TestBed } from '@angular/core/testing';

import { ServiceAutorService } from './service-autor.service';

describe('ServiceAutorService', () => {
  let service: ServiceAutorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAutorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
