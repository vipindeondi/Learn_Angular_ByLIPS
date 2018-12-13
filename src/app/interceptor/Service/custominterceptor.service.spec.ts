import { TestBed } from '@angular/core/testing';

import { CustominterceptorService } from './custominterceptor.service';

describe('CustominterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustominterceptorService = TestBed.get(CustominterceptorService);
    expect(service).toBeTruthy();
  });
});
