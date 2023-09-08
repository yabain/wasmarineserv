import { TestBed } from '@angular/core/testing';

import { NavireserviceService } from './navireservice.service';

describe('NavireserviceService', () => {
  let service: NavireserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavireserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
