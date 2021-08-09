import { TestBed } from '@angular/core/testing';

import { ConfluenceHelpCardService } from './confluence-help-card.service';

describe('ConfluenceHelpCardService', () => {
  let service: ConfluenceHelpCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfluenceHelpCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
