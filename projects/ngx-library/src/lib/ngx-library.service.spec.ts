import { TestBed } from '@angular/core/testing';

import { NgxLibraryService } from './ngx-library.service';

describe('NgxLibraryService', () => {
  let service: NgxLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
