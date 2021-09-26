import { TestBed } from '@angular/core/testing';

import { BypassService } from './bypass.service';

describe('BypassService', () => {
  let service: BypassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BypassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
