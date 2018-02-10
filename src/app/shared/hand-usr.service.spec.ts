import { TestBed, inject } from '@angular/core/testing';

import { HandUsrService } from './hand-usr.service';

describe('HandUsrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandUsrService]
    });
  });

  it('should be created', inject([HandUsrService], (service: HandUsrService) => {
    expect(service).toBeTruthy();
  }));
});
