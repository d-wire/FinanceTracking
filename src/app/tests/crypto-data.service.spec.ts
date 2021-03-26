import { TestBed } from '@angular/core/testing';

import { CryptoDataService } from '../services/crypto-data.service';

describe('CryptoDataService', () => {
  let service: CryptoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
