import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagepromptComponent } from './messageprompt.component';

describe('MessagepromptComponent', () => {
  let component: MessagepromptComponent;
  let fixture: ComponentFixture<MessagepromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagepromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagepromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
