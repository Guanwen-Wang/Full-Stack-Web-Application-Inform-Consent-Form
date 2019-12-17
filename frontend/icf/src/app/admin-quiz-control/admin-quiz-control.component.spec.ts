import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuizControlComponent } from './admin-quiz-control.component';

describe('AdminQuizControlComponent', () => {
  let component: AdminQuizControlComponent;
  let fixture: ComponentFixture<AdminQuizControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQuizControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuizControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
