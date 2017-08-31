import { TestBed, inject } from '@angular/core/testing';

import { IssueAttachService } from './issue-attach.service';

describe('IssueAttachService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssueAttachService]
    });
  });

  it('should be created', inject([IssueAttachService], (service: IssueAttachService) => {
    expect(service).toBeTruthy();
  }));
});
