import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoster2Component } from './user-roster2.component';

describe('UserRoster2Component', () => {
  let component: UserRoster2Component;
  let fixture: ComponentFixture<UserRoster2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRoster2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRoster2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
