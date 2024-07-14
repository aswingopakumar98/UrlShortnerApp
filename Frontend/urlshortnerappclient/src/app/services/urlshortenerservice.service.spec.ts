import { TestBed } from '@angular/core/testing';

import { UrlshortenerserviceService } from './urlshortenerservice.service';

describe('UrlshortenerserviceService', () => {
  let service: UrlshortenerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlshortenerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
