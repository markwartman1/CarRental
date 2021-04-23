import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUser2Component } from './edit-user2.component';

describe('EditUser2Component', () => {
  let component: EditUser2Component;
  let fixture: ComponentFixture<EditUser2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUser2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUser2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
