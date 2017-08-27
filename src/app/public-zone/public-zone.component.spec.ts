import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicZoneComponent } from './public-zone.component';

describe('PublicZoneComponent', () => {
  let component: PublicZoneComponent;
  let fixture: ComponentFixture<PublicZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
