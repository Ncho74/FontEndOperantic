import { TestBed } from '@angular/core/testing';

import { ProtectUrlGuard } from './protect-url.guard';

describe('ProtectUrlGuard', () => {
  let guard: ProtectUrlGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtectUrlGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
