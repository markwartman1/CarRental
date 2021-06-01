import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkchildnestedComponent } from './linkchildnested.component';

describe('LinkchildnestedComponent', () => {
  let component: LinkchildnestedComponent;
  let fixture: ComponentFixture<LinkchildnestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkchildnestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkchildnestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
