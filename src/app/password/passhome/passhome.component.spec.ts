import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasshomeComponent } from './passhome.component';

describe('PasshomeComponent', () => {
  let component: PasshomeComponent;
  let fixture: ComponentFixture<PasshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
