import { TestBed } from '@angular/core/testing';

import { MetaPFrameService } from './metap-frame.service';

describe('MetaPFrameService', () => {
  let service: MetaPFrameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaPFrameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
