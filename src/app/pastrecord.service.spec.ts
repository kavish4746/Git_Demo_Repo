import { TestBed, inject } from '@angular/core/testing';

import { PastrecordService } from './pastrecord.service';

describe('PastrecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PastrecordService]
    });
  });

  it('should be created', inject([PastrecordService], (service: PastrecordService) => {
    expect(service).toBeTruthy();
  }));
});
