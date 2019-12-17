import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuizControlDetailSingleComponent } from './admin-quiz-control-detail-single.component';

describe('AdminQuizControlDetailSingleComponent', () => {
  let component: AdminQuizControlDetailSingleComponent;
  let fixture: ComponentFixture<AdminQuizControlDetailSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQuizControlDetailSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuizControlDetailSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
