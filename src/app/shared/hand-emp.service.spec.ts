import { TestBed, inject } from '@angular/core/testing';

import { HandEmpService } from './hand-emp.service';

describe('HandEmpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandEmpService]
    });
  });

  it('should be created', inject([HandEmpService], (service: HandEmpService) => {
    expect(service).toBeTruthy();
  }));
});
