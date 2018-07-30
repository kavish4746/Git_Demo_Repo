import { TestBed, inject } from '@angular/core/testing';

import { GetcusineService } from './getcusine.service';

describe('GetcusineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetcusineService]
    });
  });

  it('should be created', inject([GetcusineService], (service: GetcusineService) => {
    expect(service).toBeTruthy();
  }));
});
