import { TestBed } from '@angular/core/testing';

import { LibNgxMrlonisSharedService } from './lib-ngx-mrlonis-shared.service';

describe('LibNgxMrlonisSharedService', () => {
  let service: LibNgxMrlonisSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibNgxMrlonisSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
