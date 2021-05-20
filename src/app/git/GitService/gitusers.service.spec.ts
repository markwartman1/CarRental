import { TestBed } from '@angular/core/testing';

import { GitusersService } from './gitusers.service';

describe('GitusersService', () => {
  let service: GitusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
