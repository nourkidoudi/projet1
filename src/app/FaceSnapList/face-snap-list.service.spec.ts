import { TestBed } from '@angular/core/testing';

import { FaceSnapListService } from './face-snap-list.service';

describe('FaceSnapListService', () => {
  let service: FaceSnapListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaceSnapListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
