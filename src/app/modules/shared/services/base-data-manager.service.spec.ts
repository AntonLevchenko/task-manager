import { TestBed } from '@angular/core/testing';

import { BaseDataManagerService } from './base-data-manager.service';

describe('BaseDataManagerService', () => {
  let service: BaseDataManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseDataManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
