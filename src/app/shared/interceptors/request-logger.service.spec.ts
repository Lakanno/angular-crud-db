import { TestBed } from '@angular/core/testing';

import { RequestLoggerService } from './request-logger.service';

describe('RequestLoggerService', () => {
  let service: RequestLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
