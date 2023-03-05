import { TestBed } from '@angular/core/testing';

import { UsdaStoreService } from './usda-store.service';

describe('UsdaStoreService', () => {
  let service: UsdaStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsdaStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
