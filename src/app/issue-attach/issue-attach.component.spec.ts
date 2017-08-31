import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueAttachComponent } from './issue-attach.component';

describe('IssueAttachComponent', () => {
  let component: IssueAttachComponent;
  let fixture: ComponentFixture<IssueAttachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueAttachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueAttachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
