import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageIterateComponent } from './message-iterate.component';

describe('MessageIterateComponent', () => {
  let component: MessageIterateComponent;
  let fixture: ComponentFixture<MessageIterateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageIterateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageIterateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
