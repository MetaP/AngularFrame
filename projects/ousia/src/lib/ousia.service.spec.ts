import { TestBed } from '@angular/core/testing';

import { OusiaService } from './ousia.service';

describe('OusiaService', () => {
  let service: OusiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OusiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
