import { TestBed } from '@angular/core/testing';

import { HomeComponentStoreService } from './home.store.service';

describe('HomeComponent.StoreService', () => {
  let service: HomeComponentStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeComponentStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
