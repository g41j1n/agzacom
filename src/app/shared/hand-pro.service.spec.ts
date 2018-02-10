import { TestBed, inject } from '@angular/core/testing';

import { HandProService } from './hand-pro.service';

describe('HandProService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandProService]
    });
  });

  it('should be created', inject([HandProService], (service: HandProService) => {
    expect(service).toBeTruthy();
  }));
});
