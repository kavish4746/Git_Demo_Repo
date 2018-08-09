import { TestBed, inject } from '@angular/core/testing';

import { BilldetailService } from './billdetail.service';

describe('BilldetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BilldetailService]
    });
  });

  it('should be created', inject([BilldetailService], (service: BilldetailService) => {
    expect(service).toBeTruthy();
  }));
});
