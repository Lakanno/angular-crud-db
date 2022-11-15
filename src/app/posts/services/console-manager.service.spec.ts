import { TestBed } from '@angular/core/testing';

import { ConsoleManagerService } from './console-manager.service';

describe('ConsoleManagerService', () => {
  let service: ConsoleManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsoleManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
