import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportZoneComponent } from './support-zone.component';

describe('SupportZoneComponent', () => {
  let component: SupportZoneComponent;
  let fixture: ComponentFixture<SupportZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
