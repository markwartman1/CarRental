import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRosterComponent } from './user-roster.component';

describe('UserRosterComponent', () => {
  let component: UserRosterComponent;
  let fixture: ComponentFixture<UserRosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
