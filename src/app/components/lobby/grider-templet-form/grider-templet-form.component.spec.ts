import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GriderTempletFormComponent } from './grider-templet-form.component';

describe('GriderTempletFormComponent', () => {
  let component: GriderTempletFormComponent;
  let fixture: ComponentFixture<GriderTempletFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GriderTempletFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GriderTempletFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
